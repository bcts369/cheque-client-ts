
import { BaseReq } from "cosmos-client-ts/lib/types/cosmos-sdk/rest";
// TODO: インポート元を確認する
import { Coin } from 'cosmos-client-ts/lib/types/cosmos-sdk/Coin'

export interface BurnTokenReq {
    base_req: BaseReq; // cosmos-client-ts
    from_address: string;
    amount: Coin[]; // cosmos-client-ts
}

