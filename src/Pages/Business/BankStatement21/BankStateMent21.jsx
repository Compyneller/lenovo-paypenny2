import React from "react";
import BusinessComp from "../BusinessComp/BusinessComp";
import { BankStatement21Date } from "./BankStatement21Data";

const BankStateMent21 = () => {
  return (
    <>
      <BusinessComp
        data={BankStatement21Date}
        heading="Bank Statement 2020-21"
      />
    </>
  );
};

export default BankStateMent21;
