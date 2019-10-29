import { BaseReq } from "cosmos-client-ts/lib/types/cosmos-sdk/rest";
import { AutoSell } from "./auto-sell"

export interface QueryResOwner {
    owner: string;
    auto_sell?: AutoSell;
}
