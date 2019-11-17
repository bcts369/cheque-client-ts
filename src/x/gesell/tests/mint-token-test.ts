import { CosmosSDK } from "cosmos-client-ts";
import { Gesell } from "./../index";
import { BaseReq } from 'cosmos-client-ts/lib/types/cosmos-sdk/rest'
import { Coin } from 'cosmos-client-ts/lib/types/cosmos-sdk/coin'
import { DecCoin } from 'cosmos-client-ts/lib/types/cosmos-sdk/deccoin'

import { Expiration } from "./../types/expiration"
import { MintTokenReq } from "./../types/mint-token-req"

const url: string = "http://133.130.77.80:1317";
const chainId: string = "t";
const sdk = new CosmosSDK(url, chainId);

class MyCoin implements Coin {
    denom = "stake";
    amount = "200000";
}

class MyDecCoin implements DecCoin {
    denom = "";
    amount = "0";
}

const address = "";

let defaultValues = (): BaseReq => ({
    from: address,
    memo: "",
    chain_id: chainId,
    account_number: "0",
    sequence: "0",
    fees: [new MyCoin()],
    gas_prices: [new MyDecCoin()],
    gas: "0",
    gas_adjustment: "",
    simulate: false
});

async function mintTokenTest(sdk: CosmosSDK, denomPrefix: string, params: MintTokenReq) {
    try {
        const tx = await Gesell.mintToken(sdk, denomPrefix, params);

        console.log("結果:")
        console.log("fee", tx.fee);
        console.log("msg", tx.msg);
        console.log("signature", tx.signatures);
        console.log("memo", tx.memo);
    } catch (error) {
        console.error("*** Error:", error);
    }
}

// TODO: 正しいパラメータをセットする

const denomPrefix: string = "";

const expire: Expiration = {
    year: 2019,
    month: 11,
    day: 17
}

const params: MintTokenReq = {
    base_req: defaultValues(),
    to_address: "",
    expiration: expire,
    amount: 0,
    owner: ""
}

mintTokenTest(sdk, denomPrefix, params);