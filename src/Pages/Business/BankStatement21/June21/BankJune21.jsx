import React from "react";
import BusinessComp from "../../BusinessComp/BusinessComp";
import { BankJune21Data } from "./BankJune21Data";

const BankJune21 = () => {
  return (
    <>
      <BusinessComp
        data={BankJune21Data}
        heading="Bank Statement June 2020-21"
      />
    </>
  );
};

export default BankJune21;
