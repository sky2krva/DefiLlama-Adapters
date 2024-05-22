const { getLogs } = require('../helper/cache/getLogs')
const { sumTokensExport } = require('../helper/unwrapLPs')

const config = {
  base: { factory: '0xFfD88F38025e02f9d2eB7F0875060F6B4a20980a', fromBlock: 2300044, KRAV: '0xbe3111856e4aca828593274ea6872f27968c8dd6', kravPool: '0x3e558c2378aa7d405b2ed67f510d390bcdbf4d96' },
  ethereum: { factory: '0xB86eE91672f9bC416De975a6DE06dCFF6bcE9677', fromBlock: 18040179 },
  bsc: { factory: '0x83822f0500e6d13CB983Baac07828F86B12de5f9', fromBlock: 33770009 },
  polygon: { factory: '0x83822f0500e6d13CB983Baac07828F86B12de5f9', fromBlock: 50329029 },
  arbitrum: { factory: '0x83822f0500e6d13CB983Baac07828F86B12de5f9', fromBlock: 153566008 },
  optimism: { factory: '0x6F7358D87a421d3dCe7859f31026C996444bedCc', fromBlock: 112610846 },
  polygon_zkevm: { factory: '0x05863AEAB4AeE6FD54d9f9314054f4EfAB7f8d87', fromBlock: 7960924 },
  bouncebit: { factory: '0xd9Fd951618a0a7f20E8594D227E3b89956480835', fromBlock: 765435, abi: 'event QuantoCreated(address token, address,address,address,address,address,address,address pool,address)', topics: '0xb3d783b93c7040d6f96c922e516ecd96154f643aec5ba8fc3d143a5a4b9b2127' },
}

Object.keys(config).forEach(chain => {
  const { factory, fromBlock, KRAV, kravPool, abi, topics } = config[chain]
  module.exports[chain] = {
    tvl: async (api) => {
      const logs = await getLogs({
        api,
        target: factory,
        topics: [topics || '0x5c81c71af616b8773a312ce82b16990e78cb55072a05427bc7fb08bbae50959d'],
        eventAbi: abi || 'event QuantoCreated(uint256, int256, address token, address, address, address, address, address, address, address pool, address)',
        onlyArgs: true,
        fromBlock,
      })
      return api.sumTokens({ tokensAndOwners: logs.map(i => [i.token, i.pool]), blacklistedTokens: KRAV?[KRAV]:[] })
    }
  }
  if (kravPool)
    module.exports[chain].staking = sumTokensExport({ owner: kravPool, tokens: [KRAV]})
})


