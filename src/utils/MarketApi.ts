import axios from "axios";
import { marketDataT } from "../types";

export const getMarketData = (): Promise<marketDataT> => {
  return axios
    .get(
      "https://raw.githubusercontent.com/holychikenz/MWIApi/main/milkyapi.json"
    )
    .then(({ data }) => data.market);
};
