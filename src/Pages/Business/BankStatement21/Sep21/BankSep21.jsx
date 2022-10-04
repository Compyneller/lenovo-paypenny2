import React from "react";
import BusinessComp from "../../BusinessComp/BusinessComp";
import { BankSep21Data } from "./BankSep21Data";

const BankSep21 = () => {
  return (
    <>
      <BusinessComp
        data={BankSep21Data}
        heading="Bank Statement September 2020-21"
      />
    </>
  );
};

export default BankSep21;
