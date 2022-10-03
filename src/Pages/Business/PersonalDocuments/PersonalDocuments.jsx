import React from "react";
import BusinessComp from "../BusinessComp/BusinessComp";
import { PersonalDocumentData } from "./PersonalDocumentData";

const PersonalDocuments = () => {
  return (
    <>
      <BusinessComp
        data={PersonalDocumentData}
        heading="Directors & Shareholders Personal Documents"
      />
    </>
  );
};

export default PersonalDocuments;
