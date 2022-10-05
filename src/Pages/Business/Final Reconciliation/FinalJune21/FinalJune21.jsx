import React from "react";
import BusinessComp from "../../BusinessComp/BusinessComp";
import { FinalJuneData } from "./FinalJune21Data";

const FinalJune21 = () => {
  return (
    <>
      <BusinessComp
        data={FinalJuneData}
        heading="Final Reconciliation June 2020-21"
      />
    </>
  );
};

export default FinalJune21;
