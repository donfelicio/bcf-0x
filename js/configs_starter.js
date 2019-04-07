const { GANACHE_NETWORK_ID, KOVAN_NETWORK_ID, RINKEBY_NETWORK_ID, ROPSTEN_NETWORK_ID } = require('./constants');
//const { NetworkSpecificConfigs } = require('./types');

// import { GANACHE_NETWORK_ID, KOVAN_NETWORK_ID, RINKEBY_NETWORK_ID, ROPSTEN_NETWORK_ID } from './constants';
// import { NetworkSpecificConfigs } from './types';

exports.TX_DEFAULTS = { gas: 400000 };
exports.PRIVATEKEY = 'F07F3410354A0F3EBA956265BCFEA0DF6F675FC1D122F0C91C665651410FD128';
exports.PRIVATEKEY2 = '3B2A70EC90F4054DC436CFAE92630DD9F4B69A24A788106AD2198116EAF3415F';
exports.MNEMONIC = 'luggage syrup unfair mixture inspire metal play fitness buzz ski betray found';
//exports.MNEMONIC = 'concert load couple harbor equip island argue ramp clarify fence smart topic';
exports.BASE_DERIVATION_PATH = `44'/60'/0'/0`;
const GANACHE_CONFIGS = {
        rpcUrl: 'http://127.0.0.1:8545',
        networkId: GANACHE_NETWORK_ID,
    };
const KOVAN_CONFIGS = {
        rpcUrl: 'https://kovan.infura.io/',
        networkId: KOVAN_NETWORK_ID,
    };
const ROPSTEN_CONFIGS = {
        rpcUrl: 'https://ropsten.infura.io/',
        networkId: ROPSTEN_NETWORK_ID,
    };
const RINKEBY_CONFIGS = {
        rpcUrl: 'https://rinkeby.infura.io/',
        networkId: RINKEBY_NETWORK_ID,
    };
exports.NETWORK_CONFIGS = KOVAN_CONFIGS; // or KOVAN_CONFIGS or ROPSTEN_CONFIGS or RINKEBY_CONFIGS
