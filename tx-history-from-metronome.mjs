// Setup: npm install alchemy-sdk
import { Alchemy, Network } from "alchemy-sdk";

const config = {
  apiKey: "B-Vbkc9ED5bFRouMFBUs1h8RPc91t1ND",
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

const data = await alchemy.core.getAssetTransfers({
  fromBlock: "0x0",
  fromAddress: "0x3364f53cB866762Aef66DeEF2a6b1a17C1F17f46",
  category: ["external", "internal", "erc20", "erc721", "erc1155"],
});

console.log(data);