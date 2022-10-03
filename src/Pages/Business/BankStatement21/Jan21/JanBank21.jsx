import React from "react";
import BusinessComp from "../../BusinessComp/BusinessComp";
import { Jan21Data } from "./Jan21Data";

const JanBank21 = () => {
  return (
    <>
      <BusinessComp data={Jan21Data} heading="January Bank Statement 2020-21" />
    </>
  );
};

export default JanBank21;
