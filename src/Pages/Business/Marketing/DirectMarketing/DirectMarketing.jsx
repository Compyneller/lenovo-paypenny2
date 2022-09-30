import React from "react";
import BusinessComp from "../../BusinessComp/BusinessComp";
import image from "../../../../PayPennyDocument/118915-female-radio-host-interviewing-male-guest-on-radio.gif";
import book from "../../../../PayPennyDocument/480-old-tv-flat.gif";
import { DirectMarketingData } from "./DirectMarketingData";
const DirectMarketing = () => {
  return (
    <>
      <BusinessComp
        data={DirectMarketingData}
        image={image}
        heading="Direct Marketing"
        book={book}
      />
    </>
  );
};

export default DirectMarketing;
