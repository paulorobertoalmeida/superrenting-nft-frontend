import * as Web3 from 'web3'
import { OpenSeaPort, Network } from 'opensea-js'

// This example provider won't let you make transactions, only read-only calls:
const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io')

const seaport = new OpenSeaPort(provider, {
  networkName: Network.Main
})


{/* Data I need to get from NFT */}

{
    "data": {
      "id": "",
      "walletAddress": "",
      "contractAddress": "",
      "tokenID": "",
      "name": "",
      "image": "",
      "animation": "",
      "schemaName": "ERC1155",
      "currentPrice": "",
      "quantity": "1",
      "listedByUser": true or false
    },
    "username": "",
    "handleBuy": "ƒ i() {}"
  }