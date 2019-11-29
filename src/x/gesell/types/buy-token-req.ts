import { BaseReq } from "cosmos-client-ts/lib/types/cosmos-sdk/rest";
import { Expiration } from "./expiration";


export interface BuyTokenReq {
    base_req: BaseReq; // cosmos-client-ts
    address: string;
    expiration: Expiration;
    amount: string;
}