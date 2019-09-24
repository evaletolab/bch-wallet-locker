# bch-wallet-locker
This is a simple smart-contract experiment with CashScript . The purpose of this experiment is to create a Vault and lock you funds without the need of a third party custody. The wallet lock the found until a customized user secret code confirm the transaction. This Vault can be also extended with the usage of multisig. 

>WARNING: The security is not the purpose of this project. This idea is a pretext to use CDS with a custom Oracle Service


## Sequence for Vault usage
![image](https://user-images.githubusercontent.com/1422935/65509959-00d67b00-ded4-11e9-87b5-e155de22b5ea.png)


## Sequence for Vault creation
![image](https://user-images.githubusercontent.com/1422935/65511114-c02c3100-ded6-11e9-9f12-32262a724f63.png)


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
