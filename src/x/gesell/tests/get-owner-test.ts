import { CosmosSDK } from "cosmos-client-ts";
import { Gesell } from "./../index";
// import { QueryResOwner } from "../types/query-res-owner";


const url: string = "http://133.130.77.80:1317";
const chainId: string = "t";
const sdk = new CosmosSDK(url, chainId);

async function getOwnerTest(denomPrefix: string) {
    try {
        const res = await Gesell.getOwner(sdk, denomPrefix)

        console.log(res.owner);
        console.log(res.auto_sell);
    } catch (error) {
        console.error("*** Error:", error);
    }
}

const denomPrefix: string = "";
getOwnerTest(denomPrefix)
