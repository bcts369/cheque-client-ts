import { BaseReq } from "cosmos-client-ts/lib/types/cosmos-sdk/rest";

// TODO: Ownerのimport宣言をすること

export interface UnsetAutoSellReq {
    base_req: BaseReq; // cosmos-client-ts
    owner: "";
}


// export interface UnsetAutoSellReq {
//     base_req: BaseReq; // cosmos-client-ts
//     owner: Owner;
// }