import React from "react";
import BusinessComp from "../../BusinessComp/BusinessComp";
import { BankJuly21Data } from "./BankJuly21Data";

const BankJuly21 = () => {
  return (
    <>
      <BusinessComp
        data={BankJuly21Data}
        heading="Bank Statement July 2020-21"
      />
    </>
  );
};

export default BankJuly21;
