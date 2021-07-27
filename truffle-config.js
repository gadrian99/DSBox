require('babel-register');
require('babel-polyfill');
require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');
const privateKeys = process.env.PRIVATE_KEYS || ""
const MNEMONIC = 'rent gesture robust nut perfect bird risk planet scout usage cup mobile'

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://mainnet.infura.io/v3/ea6a8a821e5144d4b5e77f7aed15db03")
          // privateKeys.split(','), // Array of account private keys
          // `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`// Url to an Ethereum Node
      },
      gas: 4000000,
      gasPrice: 25000000000,
      network_id: 1
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}