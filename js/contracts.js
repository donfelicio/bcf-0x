'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const _0x_js_1 = require('0x.js');
const { DummyERC721TokenContract } = require('@0x/abi-gen-wrappers');
const { getContractAddressesForNetworkOrThrow } = require('@0x/contract-addresses');
const { DummyERC721Token } = require('@0x/contract-artifacts');
//import { DummyERC721TokenContract } from '@0x/abi-gen-wrappers';
//import { getContractAddressesForNetworkOrThrow } from '@0x/contract-addresses';
////import { DummyERC721Token } from '@0x/contract-artifacts';

const { NETWORK_CONFIGS } = require('./configs_starter');
const { GANACHE_NETWORK_ID, KOVAN_NETWORK_ID, RINKEBY_NETWORK_ID, ROPSTEN_NETWORK_ID } = require('./constants');

//import { NETWORK_CONFIGS } from './configs';
//import { GANACHE_NETWORK_ID, KOVAN_NETWORK_ID, RINKEBY_NETWORK_ID, ROPSTEN_NETWORK_ID } from './constants';

const { providerEngine } = require('./provider_engine');
//import { providerEngine } from './provider_engine';

var _a;
var ERC721_TOKENS_BY_NETWORK_ID = (_a = {},
    _a[RINKEBY_NETWORK_ID] = ['0xffce3807ac47060e900ce3fb9cdad3597c25425d'],
    _a[GANACHE_NETWORK_ID] = ['0x07f96aa816c1f244cbc6ef114bb2b023ba54a2eb'],
    _a[KOVAN_NETWORK_ID] = ['0x84580f1ea9d989c71c13492d5d157712f08795d8'],
    _a[ROPSTEN_NETWORK_ID] = [],
    _a);

//export const dummyERC721TokenContracts: DummyERC721TokenContract[] = [];
const dummyERC721TokenContracts = [];

for (var _i = 0, _a = ERC721_TOKENS_BY_NETWORK_ID[NETWORK_CONFIGS.networkId]; _i < _a.length; _i++) {
    var tokenAddress = _a[_i];
    dummyERC721TokenContracts.push(new DummyERC721TokenContract(DummyERC721Token.compilerOutput.abi, tokenAddress, providerEngine));
}

//export const contractAddresses = getContractAddressesForNetworkOrThrow(NETWORK_CONFIGS.networkId);
exports.contractAddresses = getContractAddressesForNetworkOrThrow(NETWORK_CONFIGS.networkId);