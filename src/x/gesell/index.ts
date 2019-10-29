import { CosmosSDK } from "cosmos-client-ts";
import { StdTx } from "cosmos-client-ts/lib/x/auth/types/std-tx";
import { QueryResOwner } from "./types/query-res-owner"
import { SetOwnerReq } from "./types/set-owner-req";
import { UnsetAutoSellReq } from "./types/unset-auto-sell-req";
import { MintTokenReq } from "./types/mint-token-req";
import { BuyTokenReq } from "./types/buy-token-rew";

export module Gesell {

    /*    
    
    ## GetOwner
    
    `GET` `/gesell/denom-prefixes/{denom-prefix}/owner`
    
    ### Response
    
    ```TypeScript
    interface QueryResOwner {
      owner: string;
      auto_sell?: AutoSell;
    }
    ```
    TODO: 仕様を確認して、調整する
    */
    export function getOwner(sdk: CosmosSDK, denomPrefix: string): QueryResOwner {
        // return sdk.get(`/trust/scores/${address}`, { 'topic-ids': topicIDs.join(',') })
        const path = `/gesell/denom-prefixes/${denomPrefix}/owner`;
        return sdk.get<QueryResOwner>(path, null);
    }

    export function setOwner(sdk: CosmosSDK, denomPrefix: string, params: SetOwnerReq) {
        const path = `/gesell/denom-prefixes/${denomPrefix}/owner`;
        return sdk.put<StdTx>(path, params);
    }

    // TODO: 仕様を確認して、調整する
    export function setAutoSell(sdk: CosmosSDK, denomPrefix: string, params: UnsetAutoSellReq) {
        const path = `/gesell/denom-prefixes/${denomPrefix}/auto-sell`;
        return sdk.put<StdTx>(path, params);
    }

    // TODO: 仕様を確認して、調整する
    export function unsetAutoSell(sdk: CosmosSDK, denomPrefix: string, params: UnsetAutoSellReq) {
        const path = `/gesell/denom-prefixes/${denomPrefix}/auto-sell`;
        return sdk.delete<StdTx>(path, params);
    }

    export function mintToken(sdk: CosmosSDK, denomPrefix: string, params: MintTokenReq) {
        const path = `/gesell/denom-prefixes/${denomPrefix}/mint`;
        return sdk.post<StdTx>(path, params);
    }

    export function buyToken(sdk: CosmosSDK, denomPrefix: string, params: BuyTokenReq) {
        const path = `/gesell/denom-prefixes/${denomPrefix}/buy`;
        return sdk.post<StdTx>(path, params);
    }
}