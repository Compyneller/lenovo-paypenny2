import React from "react";
import BusinessComp from "../../BusinessComp/BusinessComp";
import { FinalFeb21Data } from "./FinalFeb21Data";

const FinalFeb21 = () => {
  return (
    <>
      <BusinessComp
        data={FinalFeb21Data}
        heading="Final Reconciliation February 2020-21"
      />
    </>
  );
};

export default FinalFeb21;
