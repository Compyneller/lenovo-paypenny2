import React from "react";
import BusinessComp from "../../BusinessComp/BusinessComp";
import { allAccountActiveData } from "./AllActiveAccountData";

const AllActiveAccount = () => {
  return (
    <>
      <BusinessComp
        data={allAccountActiveData}
        heading="All Activity Account"
      />
    </>
  );
};

export default AllActiveAccount;
