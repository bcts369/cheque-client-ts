import { CosmosSDK } from "cosmos-client-ts";
import { StdTx } from "cosmos-client-ts/lib/x/auth/types/std-tx";
import { QueryResOwner } from "./types/query-res-owner"
import { SetOwnerReq } from "./types/set-owner-req";
import { MintTokenReq } from "./types/mint-token-req";
import { BuyTokenReq } from "./types/buy-token-rew";

export module Cheque {

    export function getOwner(sdk: CosmosSDK): QueryResOwner {
        const path = '/securities/owner';
        return sdk.get<{ [owner: string]: String }>(path);
    }

    export function setOwner(sdk: CosmosSDK, denomPrefix: string, params: SetOwnerReq) {
        const path = '/securities/owner';
        return sdk.put<StdTx>(path, params);
    }

    export function mintToken(sdk: CosmosSDK, denomPrefix: string, params: MintTokenReq) {
        const path = '/securities/mint';
        return sdk.post<StdTx>(path, params);
    }

    export function burnToken(sdk: CosmosSDK, denomPrefix: string, params: BuyTokenReq) {
        const path = '/securities/burn';
        return sdk.post<StdTx>(path, params);
    }
}