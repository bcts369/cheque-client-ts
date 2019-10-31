import { BaseReq } from "cosmos-client-ts/lib/types/cosmos-sdk/rest";
import { AutoSell } from "./auto-sell"

// TODO: Ownerのimport宣言をすること


export interface SetAutoSellReq {
    base_req: BaseReq; // cosmos-client-ts
    owner: Owner;
    auto_sell: AutoSell;
}