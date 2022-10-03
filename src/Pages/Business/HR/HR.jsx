import React from "react";
import BusinessComp from "../BusinessComp/BusinessComp";
import { HRData } from "./HRData";
const HR = () => {
  return (
    <>
      <BusinessComp data={HRData} heading="HR" />
    </>
  );
};

export default HR;
