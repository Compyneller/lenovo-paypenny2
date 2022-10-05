import React from "react";
import BusinessComp from "../../BusinessComp/BusinessComp";
import { FinalOct21Data } from "./FinalOct21Data";

const FinalOct21 = () => {
  return (
    <>
      <BusinessComp
        data={FinalOct21Data}
        heading="Final Reconciliation October 2020-21"
      />
    </>
  );
};

export default FinalOct21;
