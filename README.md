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
