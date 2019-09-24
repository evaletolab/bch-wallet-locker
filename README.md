# bch-wallet-locker
This is a simple smart-contract experiment with CashScript . The purpose of this experiment is to create a Vault that lock your funds without the need of a third party custody. The funds are locked until a PGP(HASH(secret code)) is available on the P2P Network for this Wallet. The Vault can be extended with a **multisig** usage. 

>WARNING: The security is not the purpose of this project. This idea is a pretext to use CDS coupled with a custom PGP Oracle Provider


## Sequence for Vault usage
![image](https://user-images.githubusercontent.com/1422935/65515726-01750e80-dee0-11e9-9821-0060f126e853.png)


## Sequence for Vault creation
![image](https://user-images.githubusercontent.com/1422935/65516116-b27ba900-dee0-11e9-837c-a23fa68411d6.png)


# Installation
```bash
npm install -g ts-node
git clone https://github.com/evaletolab/bch-wallet-locker
cd  bch-wallet-locker
npm install
```

# Usage

```bash
ts-node locker-vault.ts
node locker-vault.js
```

# BCH Faucet on Testnet

First time you will get the error: 
```bash
contract address: bchtest:pzd3jvwuqjwyrzm8xqks4k3l6wkyeygl5uthw875lp
contract balance: 0
--- ERR Error: Insufficient balance: available (0) < needed (1078).
```

* use the testnet faucet for Bitcoin Cash =>  https://developer.bitcoin.com/faucets/bch/
