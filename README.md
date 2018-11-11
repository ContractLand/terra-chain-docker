# Terra-Chain Testnet

Testnet Environment with Parity PoA network with 3 authorities and 3 members.

### Setup

1. Install [docker](https://docs.docker.com/engine/installation/) and [docker-compose](https://docs.docker.com/compose/install/)
2. Run `docker-compose up -d`

### Access the [ethstats](https://github.com/cubedro/eth-netstats) dashboard.
A nice dashboard is already configured and connected with all the nodes.
Find it at [http://127.0.0.1:3001](http://127.0.0.1:3001).

### Access the [ethexplorer](http://github.com/carsenk/explorer) dashboard.
A nice Blockchain Explorer is already configured and connected with all the nodes.
Find it at [http://127.0.0.1:3002](http://127.0.0.1:3002).

### Accounts
You may change the list of prefunded accounts in `parity/config/chain.json`.

### Access JSON RPC
Talk to JSON RPC at [http://127.0.0.1:8545](http://127.0.0.1:8545) with your favorite client.

### Chain spec
- Consensus contract implementation: `0x0000000000000000000000000000000000000009`
- Consensus contract relay: `0x0000000000000000000000000000000000000010`
- Initial Validators: "0x00Bd138aBD70e2F00903268F3Db08f2D25677C9e", "0x00aa39d30f0d20ff03a22ccfc30b7efbfca597c2", "0x002e28950558fbede1a9675cb113f0bd20912019"
- Permission contract implementation: `0x0000000000000000000000000000000000000011`
- Permission contract relay: `0x0000000000000000000000000000000000000012`
