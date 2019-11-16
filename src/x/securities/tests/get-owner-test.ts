import { CosmosSDK } from "cosmos-client-ts";
import { Cheque } from "./../index";


const url: string = "http://133.130.77.80:1317";
const chainId: string = "t";
const sdk = new CosmosSDK(url, chainId);

async function getOwnerTest() {
    try {
        let result = await Cheque.getOwner(sdk)

        console.log(result)
    } catch (error) {
        console.error("*** Error:", error);
    }
}

getOwnerTest()