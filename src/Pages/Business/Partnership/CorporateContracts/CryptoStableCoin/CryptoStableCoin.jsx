import React from "react";
import BusinessComp from "../../../BusinessComp/BusinessComp";
import { CryptoStableCoinData } from "./CryptoStableCoinData";

const CryptoStableCoin = () => {
  return (
    <>
      <BusinessComp data={CryptoStableCoinData} heading="Crypto Stable Coin" />
    </>
  );
};

export default CryptoStableCoin;
