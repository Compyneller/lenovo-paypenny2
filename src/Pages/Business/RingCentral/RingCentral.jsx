import React from "react";
import BusinessComp from "../BusinessComp/BusinessComp";
import { RingCentralData } from "./RingCentralData";
import image from "../../../PayPennyDocument/92807-conference-call.gif";
import book from "../../../PayPennyDocument/1435-reorder-flat.gif";
const RingCentral = () => {
  return (
    <>
      <BusinessComp
        data={RingCentralData}
        image={image}
        heading="Ring Central"
        book={book}
      />
    </>
  );
};

export default RingCentral;
