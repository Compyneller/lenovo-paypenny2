import React from "react";
import BusinessComp from "../BusinessComp/BusinessComp";
import { AccountActivitySheetData } from "./AccountActivitySheetData";

const AccountActivitySheet = () => {
  return (
    <>
      <BusinessComp
        data={AccountActivitySheetData}
        heading="Account Activity Sheet"
      />
    </>
  );
};

export default AccountActivitySheet;
