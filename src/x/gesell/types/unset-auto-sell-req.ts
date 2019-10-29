import { BaseReq } from "cosmos-client-ts/lib/types/cosmos-sdk/rest";
import { AutoSell } from "./auto-sell"

export interface UnsetAutoSellReq {
    base_req: BaseReq; // cosmos-client-ts
    owner: Owner;
    auto_sell: AutoSell;
}