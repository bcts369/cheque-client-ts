import { BaseReq } from "cosmos-client-ts/lib/types/cosmos-sdk/rest";

export interface SetOwnerReq {
    base_req: BaseReq; // cosmos-client-ts
    owner: string;
    new_owner: string;
}