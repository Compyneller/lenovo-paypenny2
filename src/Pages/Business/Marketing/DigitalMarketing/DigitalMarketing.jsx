import React from "react";
import BusinessComp from "../../BusinessComp/BusinessComp";
import { DigitalMarketingData } from "./DigitalMarketingData";
import image from "../../../../PayPennyDocument/11526-social-media.gif";
import book from "../../../../PayPennyDocument/950-attract-customers-flat.gif";
const DigitalMarketing = () => {
  return (
    <>
      <BusinessComp
        data={DigitalMarketingData}
        image={image}
        book={book}
        heading="Digital Marketing"
      />
    </>
  );
};

export default DigitalMarketing;
