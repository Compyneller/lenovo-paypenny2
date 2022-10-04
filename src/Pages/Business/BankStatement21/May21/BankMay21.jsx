import React from "react";
import BusinessComp from "../../BusinessComp/BusinessComp";
import { BankMay21Data } from "./BankMay21Data";

const BankMay21 = () => {
  return (
    <>
      <BusinessComp data={BankMay21Data} heading="Bank Statement May 2020-21" />
    </>
  );
};

export default BankMay21;
