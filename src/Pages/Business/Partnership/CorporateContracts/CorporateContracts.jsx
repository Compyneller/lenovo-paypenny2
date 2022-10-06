import React from "react";
import BusinessComp from "../../BusinessComp/BusinessComp";
import { CorporateData } from "./CorporateData";

const CorporateContracts = () => {
  return (
    <>
      <BusinessComp data={CorporateData} heading="Corporate Contracts" />
    </>
  );
};

export default CorporateContracts;
