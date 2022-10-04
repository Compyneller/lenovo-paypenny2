import React from "react";
import BusinessComp from "../../BusinessComp/BusinessComp";
import { BankOct21Data } from "./BankOct21Data";

const BankOct = () => {
  return (
    <>
      <BusinessComp
        data={BankOct21Data}
        heading="Bank Statement October 2020-21"
      />
    </>
  );
};

export default BankOct;
