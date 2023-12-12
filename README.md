# Karlsen Wallet (CLI)

Karlsen Wallet command-line interface build on top of
[Karlsen Wallet](https://github.com/karlsen-network/node-karlsen-wallet)
framework.

This command-line wallet is compatible with
[Karlsen KDX](https://github.com/karlsen-network/karlsen-kdx)

## Installing Karlsen Wallet

```
npm install -g @karlsen/wallet-cli
karlsen-wallet
```

## Cloning Karlsen Wallet

The following applies to development environment only:

```
git clone https://github.com/karlsen-network/node-karlsen-wallet-cli
cd node-karlsen-wallet-cli
npm install
node karlsen-wallet
```

## Running Karlsen Wallet

```
$ node karlsen-wallet
Usage: karlsen-wallet [options] [command]

Karlsen Wallet CLI v1.1.18

Options:
  --version                                output the version number
  --no-sync                                disable network sync for all operations
  --log <level>                            set log level error, warn, info, verbose, debug, utxodebug
  --verbose                                log wallet activity
  --debug                                  debug wallet activity
  --testnet                                use testnet network
  --devnet                                 use devnet network
  --simnet                                 use simnet network
  --rpc <address>                          use custom RPC address <host:port>
  --folder <path>                          use custom folder for wallet file storage
  --file <filename>                        use custom wallet filename
  --help                                   display help for command

Commands:
  sync                                     sync wallet with the network
  monitor                                  monitor wallet activity
  balance                                  display wallet balance
  send [options] <address> <amount> [fee]  send funds to an address
  info                                     internal wallet information
  transactions                             list wallet transactions
  address                                  show wallet address
  qrcode [options]                         show wallet address qrcode
  create [options]                         create Karlsen wallet
  permanently-decrypt                      decrypt wallet permanently
  permanently-encrypt                      encrypt wallet permanently
  compound                                 compound transactions by re-sending funds to itself
  help [command]                           display help for command
```

## gRPC Interface Utility

Karlsen Wallet provides a test utility `rpc.js` allowing you to send RPC
commands to `karlsend` from the terminal:

```
$ node karlsen-rpc
Usage: karlsen-rpc [options] [command]

Karlsen gRPC client

Options:
  --version                                         output the version number
  --testnet                                         use testnet network
  --devnet                                          use devnet network
  --simnet                                          use simnet network
  --server <server>:<port>                          use custom gRPC server endpoint
  -h, --help                                        display help for command

Commands:
  run [options]                                     Run gRPC "run -m <method> -j <json_data>"
  requestBlockLocator [options]                     gRPC call requestBlockLocator
  requestAddresses [options]                        gRPC call requestAddresses
  requestHeaders [options]                          gRPC call requestHeaders
  requestNextHeaders                                gRPC call requestNextHeaders
  requestRelayBlocks [options]                      gRPC call requestRelayBlocks
  requestTransactions [options]                     gRPC call requestTransactions
  requestPruningPointUTXOSetAndBlock [options]      gRPC call requestPruningPointUTXOSetAndBlock
  requestIBDBlocks [options]                        gRPC call requestIBDBlocks
  requestPruningPointHash                           gRPC call requestPruningPointHash
  requestNextPruningPointUtxoSetChunk               gRPC call requestNextPruningPointUtxoSetChunk
  getCurrentNetwork                                 gRPC call getCurrentNetwork
  submitBlock [options]                             gRPC call submitBlock
  getBlockTemplate [options]                        gRPC call getBlockTemplate
  notifyBlockAdded                                  gRPC call notifyBlockAdded
  getPeerAddresses                                  gRPC call getPeerAddresses
  getSelectedTipHash                                gRPC call getSelectedTipHash
  getMempoolEntry [options]                         gRPC call getMempoolEntry
  getConnectedPeerInfo                              gRPC call getConnectedPeerInfo
  addPeer [options]                                 gRPC call addPeer
  submitTransaction [options]                       gRPC call submitTransaction
  notifyVirtualSelectedParentChainChanged           gRPC call notifyVirtualSelectedParentChainChanged
  getBlock [options]                                gRPC call getBlock
  getSubnetwork [options]                           gRPC call getSubnetwork
  getVirtualSelectedParentChainFromBlock [options]  gRPC call getVirtualSelectedParentChainFromBlock
  getBlocks [options]                               gRPC call getBlocks
  getBlockCount                                     gRPC call getBlockCount
  getBlockDagInfo                                   gRPC call getBlockDagInfo
  resolveFinalityConflict [options]                 gRPC call resolveFinalityConflict
  notifyFinalityConflicts                           gRPC call notifyFinalityConflicts
  getMempoolEntries                                 gRPC call getMempoolEntries
  shutDown                                          gRPC call shutDown
  getHeaders [options]                              gRPC call getHeaders
  notifyUtxosChanged [options]                      gRPC call notifyUtxosChanged
  getUtxosByAddresses [options]                     gRPC call getUtxosByAddresses
  getVirtualSelectedParentBlueScore                 gRPC call getVirtualSelectedParentBlueScore
  notifyVirtualSelectedParentBlueScoreChanged       gRPC call notifyVirtualSelectedParentBlueScoreChanged
  ban [options]                                     gRPC call ban
  unban [options]                                   gRPC call unban
  getInfo                                           gRPC call getInfo
  help [command]                                    display help for command
```

## RPC Example

```
node rpc run -m getTransactionsByAddressesRequest -j '{"addresses":["karlsentest:qr32vna4u8wdamddwaf8853gt52dsauyp59zlcwd5k"], "startingBlockHash":""}'
```

## Running Karlsend and Mining

```sh
./karlsend --utxoindex --testnet --dnsseed=testnet-dnsseed.daglabs-dev.com
./karlsenminer --miningaddr=karlsentest:qq0nvlmn07f6edcdfynt4nu4l4r58rkquuvgt635ac --rpcserver=localhost:42210 --testnet
```
