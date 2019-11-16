import { CosmosSDK } from "cosmos-client-ts";
import { BaseReq } from 'cosmos-client-ts/lib/types/cosmos-sdk/rest'
import { Coin } from 'cosmos-client-ts/lib/types/cosmos-sdk/coin'
import { DecCoin } from 'cosmos-client-ts/lib/types/cosmos-sdk/deccoin'

import { Cheque } from "./../index";
import { Expiration } from "./../../gesell/types/expiration"
import { MintTokenReq } from "./../../gesell/types/mint-token-req";


const url: string = "http://133.130.77.80:1317";
const chainId: string = "t";
const sdk = new CosmosSDK(url, chainId);
const address = "" // TODO: 正しい動作確認用のアドレスをセットする

class MyCoin implements Coin {
    denom = "stake";
    amount = "200000";
}

class MyDecCoin implements DecCoin {
    denom = "";
    amount = "0";
}

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

async function mintTokenTest(toAddress: string, expiration: Expiration, amount: number, owner: string) {
    const params: MintTokenReq = {
        base_req: defaultValues(),
        to_address: toAddress,
        expiration: expiration,
        amount: amount,
        owner: owner
    }

    try {
        let result = await Cheque.mintToken(sdk, params);

        console.log(result);
    } catch (error) {
        console.error("*** Error:", error);
    }
}

const expire: Expiration = {
    year: 2019,
    month: 11,
    day: 16
}

// TODO: 正しい値をセットする
mintTokenTest("", expire, 0, "");
