import React from "react";
import BusinessComp from "../../BusinessComp/BusinessComp";
import { FebBank21Data } from "./FebBank21Data";

const FebBank21 = () => {
  return (
    <>
      <BusinessComp
        data={FebBank21Data}
        heading="February Bank Statement 2020-21"
      />
    </>
  );
};

export default FebBank21;
