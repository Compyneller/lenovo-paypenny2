import React from "react";
import BusinessComp from "../../BusinessComp/BusinessComp";
import { BankAug21Data } from "./BankAug21Data";

const BankAug21 = () => {
  return (
    <>
      <BusinessComp
        data={BankAug21Data}
        heading="Bank Statement August 2020-21"
      />
    </>
  );
};

export default BankAug21;
