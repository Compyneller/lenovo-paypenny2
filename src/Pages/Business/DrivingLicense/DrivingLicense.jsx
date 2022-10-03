import React from "react";
import BusinessComp from "../BusinessComp/BusinessComp";

import { DrivingLisenceData } from "./DrivingLisenceData";
const DrivingLicense = () => {
  return (
    <>
      <BusinessComp data={DrivingLisenceData} heading="Driving License" />
    </>
  );
};

export default DrivingLicense;
