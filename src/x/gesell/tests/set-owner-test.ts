import { CosmosSDK } from "cosmos-client-ts";
import { BaseReq } from 'cosmos-client-ts/lib/types/cosmos-sdk/rest'
import { Coin } from 'cosmos-client-ts/lib/types/cosmos-sdk/coin'
import { DecCoin } from 'cosmos-client-ts/lib/types/cosmos-sdk/deccoin'

import { Gesell } from "./../index";
import { SetOwnerReq } from "./../types/set-owner-req"


const url: string = "http://133.130.77.80:1317";
const chainId: string = "t";
const sdk = new CosmosSDK(url, chainId);
const address = "";

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

async function setOwnerTest(sdk: CosmosSDK, denomPrefix: string, owner: string, newOwner: string) {

    const params: SetOwnerReq = {
        base_req: defaultValues(),
        owner: owner,
        new_owner: newOwner
    }

    try {
        const tx = await Gesell.setOwner(sdk, denomPrefix, params);

        console.log("結果:")
        console.log("fee", tx.fee);
        console.log("msg", tx.msg);
        console.log("signature", tx.signatures);
        console.log("memo", tx.memo);
    } catch (error) {
        console.error("*** Error:", error);
    }
}

// TODO: 正しい値をセットする
const denomPrefix: string = "";
const owner = "";
const newOwner = "";
setOwnerTest(sdk, denomPrefix, owner, newOwner);
