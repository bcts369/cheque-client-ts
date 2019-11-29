import { CosmosSDK } from "cosmos-client-ts";
import { StdTx } from "cosmos-client-ts/lib/x/auth/types/std-tx";
import { SetOwnerReq } from "./types/set-owner-req";
import { MintTokenReq } from "../gesell/types/mint-token-req";
import { BurnTokenReq } from "./types/burn-token-req";

export module Cheque {
    export function getOwner(sdk: CosmosSDK) {
        const path = '/securities/owner';
        return sdk.get<{ [owner: string]: String }>(path);
    }

    export function setOwner(sdk: CosmosSDK, params: SetOwnerReq) {
        const path = '/securities/owner';
        return sdk.put<StdTx>(path, JSON.stringify(params));
    }

    export function mintToken(sdk: CosmosSDK, params: MintTokenReq) {
        const path = '/securities/mint';
        return sdk.post<StdTx>(path, JSON.stringify(params));
    }

    export function burnToken(sdk: CosmosSDK, params: BurnTokenReq) {
        const path = '/securities/burn';
        return sdk.post<StdTx>(path, JSON.stringify(params));
    }
}