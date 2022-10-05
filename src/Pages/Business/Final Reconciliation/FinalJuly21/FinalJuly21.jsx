import React from "react";
import BusinessComp from "../../BusinessComp/BusinessComp";
import { FinalJuly21Data } from "./FInalJuly21Data";

const FinalJuly21 = () => {
  return (
    <>
      <BusinessComp
        data={FinalJuly21Data}
        heading="Final Reconciliation July 2020-21"
      />
    </>
  );
};

export default FinalJuly21;
