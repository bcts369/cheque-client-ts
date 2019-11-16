import { CosmosSDK } from "cosmos-client-ts";
import { BaseReq } from 'cosmos-client-ts/lib/types/cosmos-sdk/rest'
import { Coin } from 'cosmos-client-ts/lib/types/cosmos-sdk/coin'
import { DecCoin } from 'cosmos-client-ts/lib/types/cosmos-sdk/deccoin'

import { Cheque } from "./../index";
import { BurnTokenReq } from "./../types/burn-token-req";


const url: string = "http://133.130.77.80:1317";
const chainId: string = "t";
const sdk = new CosmosSDK(url, chainId);
const address = ""; // TODO: 正しい動作確認用のアドレスをセットする

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

async function burnTokenTest(coins: Coin[]) {
    const params: BurnTokenReq = {
        base_req: defaultValues(),
        from_address: "",
        amount: coins
    }

    try {
        let result = await Cheque.burnToken(sdk, params);

        console.log(result);
    } catch (error) {
        console.error("*** Error:", error);
    }
}

class Coin4Token implements Coin {
    denom = "stake";
    amount = "200000";
}

// TODO: 具体的な値をセットする
const coins: Coin4Token[] = [];
burnTokenTest(coins);
