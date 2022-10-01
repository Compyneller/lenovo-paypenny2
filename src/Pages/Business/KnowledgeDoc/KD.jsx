import React from "react";
import BusinessComp from "../BusinessComp/BusinessComp";
import { KDData } from "./KDData";
import image from "../../../PayPennyDocument/41210-document-ocr-scan.gif";
import book from "../../../PayPennyDocument/966-privacy-policy-lineal.gif";

const KD = () => {
  return (
    <>
      <BusinessComp
        data={KDData}
        heading="Knowledge Document"
        book={book}
        image={image}
      />
    </>
  );
};

export default KD;
