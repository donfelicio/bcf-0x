{
	"signedOrder": {
		"senderAddress": "0x0000000000000000000000000000000000000000",
		"makerAddress": "0x7b7292ff9e12f170ff77f601a2688a298c56ac80",
		"takerAddress": "0x0000000000000000000000000000000000000000",
		"makerFee": "0",
		"takerFee": "0",
		"makerAssetAmount": "10000000000000",
		"takerAssetAmount": "1000000000000000000",
		"makerAssetData": "0xf47261b0000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
		"takerAssetData": "0xf47261b0000000000000000000000000e41d2489571d322189246dafa5ebde1f4699f498",
		"expirationTimeSeconds": "2524604400",
		"feeRecipientAddress": "0x0000000000000000000000000000000000000000",
		"salt": "61227264080746031788277341408665069373678444512753159728579740763614946118213",
		"signature": "0x1bf7a5252f0c74e4a8fcee3614a1ef253e644105eb80f8ec8422a542a989498dea6cf6e811eb3745e477befe54e36fdceb4aa12e629b763d39f7d5bdb3c6e5250103",
		"exchangeAddress": "0x4f833a24e1f95d70f028921e27040ca56e09ab0b"
	},
	"metadata": {
		"makerToken": {
			"name": "Wrapped Ether",
			"symbol": "WETH",
			"decimals": 18
		},
		"takerToken": {
			"name": "0x",
			"symbol": "ZRX",
			"decimals": 18
		}
	}
}

Orderbook get orders: http://localhost:3000/v2/orderbook?baseAssetData=0xf47261b00000000000000000000000002002d3812f58e35f0ea1ffbf80a75a38c32175fa&quoteAssetData=0xf47261b0000000000000000000000000d0a1e359811322d97991e03f863a0c30c2cf029c