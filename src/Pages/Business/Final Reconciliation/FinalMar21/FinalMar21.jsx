import React from "react";
import BusinessComp from "../../BusinessComp/BusinessComp";
import { FinalMar21Data } from "./FinalMar21Data";

const FinalMar21 = () => {
  return (
    <>
      <BusinessComp
        data={FinalMar21Data}
        heading="Final Reconciliation March 2020-21"
      />
    </>
  );
};

export default FinalMar21;
