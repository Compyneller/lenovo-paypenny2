import React from "react";
import BusinessComp from "../../BusinessComp/BusinessComp";
import { FinalApril21Data } from "./FinalApril21Data";

const FinalApril21 = () => {
  return (
    <>
      <BusinessComp
        data={FinalApril21Data}
        heading="Final Reconciliation April 2020-21"
      />
    </>
  );
};

export default FinalApril21;
