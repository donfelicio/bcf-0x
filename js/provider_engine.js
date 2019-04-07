const { RPCSubprovider, Web3ProviderEngine } = require('0x.js');
const { MnemonicWalletSubprovider, PrivateKeyWalletSubprovider } = require('@0x/subproviders');

// import { RPCSubprovider, Web3ProviderEngine } from '0x.js';
// import { MnemonicWalletSubprovider } from '@0x/subproviders';

const { BASE_DERIVATION_PATH, MNEMONIC, PRIVATEKEY, PRIVATEKEY2, NETWORK_CONFIGS } = require('./configs_starter');
//import { BASE_DERIVATION_PATH, MNEMONIC, NETWORK_CONFIGS } from './configs';

const mnemonicWallet = new MnemonicWalletSubprovider({
        mnemonic: MNEMONIC,
        baseDerivationPath: BASE_DERIVATION_PATH,
    });
const privateKeyWallet = new PrivateKeyWalletSubprovider(PRIVATEKEY)
const privateKeyWallet2 = new PrivateKeyWalletSubprovider(PRIVATEKEY2)
// export const mnemonicWallet = new MnemonicWalletSubprovider({
//     mnemonic: MNEMONIC,
//     baseDerivationPath: BASE_DERIVATION_PATH,
// });

const pe = new Web3ProviderEngine();
//export const pe = new Web3ProviderEngine();
pe.addProvider(privateKeyWallet);
pe.addProvider(privateKeyWallet2);
pe.addProvider(new RPCSubprovider(NETWORK_CONFIGS.rpcUrl));
pe.start();

exports.providerEngine = pe;