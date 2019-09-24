import { BITBOX, Crypto } from 'bitbox-sdk';
import { TxnDetailsResult } from 'bitcoin-com-rest';
import { ECPair, HDNode } from 'bitcoincashjs-lib';
import { Contract, Instance, Sig } from 'cashscript';
import * as path from 'path';

//
// Oracle service is the owner 
class LockerOracle {
  constructor(public keypair: ECPair) {}

  //
  // Encode and Sign a secred code 
  unlock(secret: string): Buffer[] {
    let secret_sha=new Crypto().sha256(Buffer.from(secret));
    return [secret_sha,this.keypair.sign(secret_sha).toDER()];
  }
}

run();
export async function run(): Promise<void> {
  // Initialise BITBOX
  const network: string = 'testnet';
  const bitbox: BITBOX = new BITBOX({ restURL: 'https://trest.bitcoin.com/v2/' });

  // Initialise HD node and owner's keypair
  const rootSeed: Buffer = bitbox.Mnemonic.toSeed('CashScript');
  const hdNode: HDNode = bitbox.HDNode.fromSeed(rootSeed, network);
  const owner: ECPair = bitbox.HDNode.toKeyPair(bitbox.HDNode.derive(hdNode, 0));

  // Initialise price oracle with a keypair
  const oracle: LockerOracle = new LockerOracle(bitbox.HDNode.toKeyPair(bitbox.HDNode.derive(hdNode, 1)));

  // Compile and instantiate HODL Vault
  const HodlVault: Contract = Contract.fromCashFile(path.join(__dirname, 'hodl_vault.cash'), 'testnet');
  const instance: Instance = HodlVault.new(
    bitbox.ECPair.toPublicKey(owner),
    bitbox.ECPair.toPublicKey(oracle.keypair),
    new Crypto().sha256(Buffer.from("Hello World"))
  );

  // Produce new oracle message and signature
  const oracleSecret: Buffer[] = oracle.unlock('hello world');
  
  // Spend from the vault
  const tx: TxnDetailsResult = await instance.functions
    .spend(new Sig(owner, 0x01), oracleSecret[1], oracleSecret[0])
    .send(instance.address, 1000);

  console.log(tx);
}
