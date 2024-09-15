const { sumERC4626VaultsExport } = require("../helper/erc4626");

const vaultTvlOnArbitrum = sumERC4626VaultsExport({
  vaults: [
    "0x27D22Eb71f00495Eccc89Bb02c2B68E6988C6A42",
    "0x183424d5ae5ec9fd486634bc566d0f75ad9c9109",
    "0x5b49d7fae00de64779ddcd6b067c8eb046bd9a0b",
    "0x291344FBaaC4fE14632061E4c336Fe3B94c52320",
    "0xEd80C858D43a1D043E86Cf1F20384e189cf23BDA",
    "0x4ada76cc8755f62508a2df65d7fafa4fd26e76c6",
    "0x1c17a39B156189BF40905425170a3Ff62fb650DA",
    "0x7348925D3C63e4E61e9F5308eEec0f06EaA3bB7b",
    "0xD1D64dAeED7504Ef3Eb056aa2D973bD064843A84",
    "0xB0730AA7d6e880F901B5d71A971096dB56895a0f",
    "0x5f44A7DD0a016A5Ec9682df36899A781442CAa43",
    "0x0215EdEecdABE3DfC5EC8D59337eC9b26d359088",
    "0x36b1939ADf539a4AC94b57DBAd32FaEcd5bcF4d0",
    "0x34F0FdD80A51dfd8bA42343c20F89217280d760E",
    "0x57f467C9c4639B066F5A4D676Cd8Ed7D87C1791b",
    "0x7348925D3C63e4E61e9F5308eEec0f06EaA3bB7b",
    "0xCFBBea43Fd99126E4c0eF53e2344609D513f72b3",
    "0x0F76De33a3679a6065D14780618b54584a3907D4"
  ],
  isOG4626: true,
});

const vaultTvlOnAvalanche = sumERC4626VaultsExport({
  vaults: ["0x17Fd8C3d1e0379Cf6B1Dace21750E624EB9573C2"],
  isOG4626: true,
})

module.exports = {
  arbitrum: {
    tvl: vaultTvlOnArbitrum,
  },
  avax: {
    tvl: vaultTvlOnAvalanche,
  }
};