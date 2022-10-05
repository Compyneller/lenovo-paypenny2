import React from "react";
import BusinessComp from "../BusinessComp/BusinessComp";
import { FInalReconciliationData } from "./FInalReconciliationData";

const FInalReconciliation = () => {
  return (
    <>
      <BusinessComp
        data={FInalReconciliationData}
        heading="Final Reconciliation 2020-21"
      />
    </>
  );
};

export default FInalReconciliation;
