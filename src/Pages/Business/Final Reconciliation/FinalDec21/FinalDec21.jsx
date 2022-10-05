import React from "react";
import BusinessComp from "../../BusinessComp/BusinessComp";
import { FinalDec21Data } from "./FinalDec21Data";

const FinalDec21 = () => {
  return (
    <>
      <BusinessComp
        data={FinalDec21Data}
        heading="Final Reconciliation December 2020-21"
      />
    </>
  );
};

export default FinalDec21;
