import React from "react";
import BusinessComp from "../../BusinessComp/BusinessComp";
import { BankDec21Data } from "./BankDec21Data";

const BankDec21 = () => {
  return (
    <>
      <BusinessComp
        data={BankDec21Data}
        heading="Bank Statement December 2020-21"
      />
    </>
  );
};

export default BankDec21;
