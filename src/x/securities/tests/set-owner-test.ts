import { CosmosSDK } from "cosmos-client-ts";
import { BaseReq } from 'cosmos-client-ts/lib/types/cosmos-sdk/rest'
import { Coin } from 'cosmos-client-ts/lib/types/cosmos-sdk/coin'
import { DecCoin } from 'cosmos-client-ts/lib/types/cosmos-sdk/deccoin'

import { Cheque } from "./../index";
import { SetOwnerReq } from "./../types/set-owner-req";


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

async function setOwnerTest(owner: string, newOwner: string) {
    const params: SetOwnerReq = {
        owner: owner,
        new_owner: newOwner,
        base_req: defaultValues()
    }

    try {
        let result = await Cheque.setOwner(sdk, params);

        console.log(result);
    } catch (error) {
        console.error("*** Error:", error);
    }
}

// TODO: 正しいOwner情報をセットする
setOwnerTest("", "");