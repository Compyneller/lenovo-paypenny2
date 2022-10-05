import React from "react";
import BusinessComp from "../../BusinessComp/BusinessComp";
import { FinalSep21Data } from "./FinalSep21Data";

const FinalSept21 = () => {
  return (
    <>
      <BusinessComp
        data={FinalSep21Data}
        heading="Final Reconciliation September 2020-21"
      />
    </>
  );
};

export default FinalSept21;
