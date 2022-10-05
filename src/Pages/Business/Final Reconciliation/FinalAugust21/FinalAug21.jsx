import React from "react";
import BusinessComp from "../../BusinessComp/BusinessComp";
import { FinalAug21Data } from "./FinalAug21Data";

const FinalAug21 = () => {
  return (
    <>
      <BusinessComp
        data={FinalAug21Data}
        heading="Final Reconciliation August 2020-21"
      />
    </>
  );
};

export default FinalAug21;
