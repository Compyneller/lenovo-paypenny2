import React from "react";
import BusinessComp from "../../BusinessComp/BusinessComp";
import { BankNov21Data } from "./BankNov21Data";

const BankNov21 = () => {
  return (
    <>
      <BusinessComp
        data={BankNov21Data}
        heading="Bank Statement November 2020-21"
      />
    </>
  );
};

export default BankNov21;
