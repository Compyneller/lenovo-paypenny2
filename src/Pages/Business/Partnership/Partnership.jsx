import React from "react";
import BusinessComp from "../BusinessComp/BusinessComp";
import { PartnershipData } from "./PartnershipData";

const Partnership = () => {
  return (
    <>
      <BusinessComp data={PartnershipData} heading="Partnership" />
    </>
  );
};

export default Partnership;
