import React from "react";
import BusinessComp from "../../BusinessComp/BusinessComp";
import { FinalNov21Data } from "./FinalNov21Data";

const FinalNov21 = () => {
  return (
    <>
      <BusinessComp
        data={FinalNov21Data}
        heading="Final Reconciliation November 2020-21"
      />
    </>
  );
};

export default FinalNov21;
