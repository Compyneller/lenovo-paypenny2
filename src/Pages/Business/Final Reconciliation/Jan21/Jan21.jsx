import React from "react";
import BusinessComp from "../../BusinessComp/BusinessComp";
import { Jan21Data } from "./Jan21Data";

const Jan21 = () => {
  return (
    <>
      <BusinessComp
        data={Jan21Data}
        heading="Final Reconciliation January 2020-21"
      />
    </>
  );
};

export default Jan21;
