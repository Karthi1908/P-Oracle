import { NetworkType } from '@airgap/beacon-sdk';
import { BeaconWallet } from '@taquito/beacon-wallet';
import { TezosToolkit, MichelCodecPacker, compose } from '@taquito/taquito';


const CONTRACT_ADDRESS = 'KT1W9ifDiciNobHae6AZj9qffBisQouUPUeb';
const TOKEN_ADDRESS = 'KT19Spcv2j1ktJd5EBTkg4XbnaEeRD1tWmhW';
//const CONTRACT_ADDRESS = 'KT1DwGe6b1x3iqCGMgrFykasxEErt986Rgox';
//const TOKEN_ADDRESS = 'KT1BvYkPGPau7xDSRxLVz7DQpuWZfrXBLL27';

//const Tezos = new TezosToolkit('https://hangzhounet.smartpy.io');
const Tezos = new TezosToolkit('https://mainnet.api.tez.ie');
Tezos.setPackerProvider(new MichelCodecPacker());

const ContractProvider = Tezos.contract;

const beaconWallet = new BeaconWallet({
  name: 'Predictor',
  preferredNetwork: "mainnet"
});

Tezos.setWalletProvider(beaconWallet);

const wallet = Tezos.wallet;

export { CONTRACT_ADDRESS,TOKEN_ADDRESS, Tezos, ContractProvider, wallet, beaconWallet };
