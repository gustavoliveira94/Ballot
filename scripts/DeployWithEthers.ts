import { ethers } from "ethers";
import * as dotenv from "dotenv";
import { Ballot, Ballot__factory } from "../typechain-types";
dotenv.config();

async function main() {
  //receiving parameters
  const provider = ethers.getDefaultProvider("sepolia");
  const lastBlock = await provider.getBlock("latest");

  console.log(`Last block number: ${lastBlock?.number}`);

  const lastBlockTimestamp = lastBlock?.timestamp ?? 0;
  const lastBlockDate = new Date(lastBlockTimestamp * 1000);

  console.log(
    `Last block timestamp: ${lastBlockTimestamp} (${lastBlockDate.toLocaleDateString()} ${lastBlockDate.toLocaleTimeString()})`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
