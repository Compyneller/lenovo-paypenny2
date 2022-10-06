import React from "react";
import BusinessComp from "../../../BusinessComp/BusinessComp";
import { ComplianceData } from "./ComplianceData";

const Compliance = () => {
  return (
    <>
      <BusinessComp data={ComplianceData} heading="Compliance" />
    </>
  );
};

export default Compliance;
