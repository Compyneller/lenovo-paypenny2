import React from "react";
import BusinessComp from "../../BusinessComp/BusinessComp";
import { FinalMay21Data } from "./FinalMay21Data";

const FinalMay21 = () => {
  return (
    <>
      <BusinessComp
        data={FinalMay21Data}
        heading="Final Reconciliation May 2020-21"
      />
    </>
  );
};

export default FinalMay21;
