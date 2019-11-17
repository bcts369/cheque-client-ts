import { BaseReq } from "cosmos-client-ts/lib/types/cosmos-sdk/rest";
// import { AutoSell } from "./auto-sell"
import { Expiration } from "./expiration"


export interface MintTokenReq {
    base_req: BaseReq; // cosmos-client-ts
    to_address: string;
    expiration: Expiration;
    amount: number;
    owner: string;
}