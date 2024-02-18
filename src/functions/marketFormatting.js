import { stateAbbreviationToFIPS } from "./stateMappings.js";

export const formatMarketToFIPS = (market) => {
  const stateAbbreviation = market.split(" - ")[0];
  return stateAbbreviationToFIPS[stateAbbreviation];
};
