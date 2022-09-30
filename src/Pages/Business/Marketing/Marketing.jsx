import React from "react";

import book from "../../../PayPennyDocument/1027-marketing-campaign-flat.gif";
import image from "../../../PayPennyDocument/62160-marketing-telephone.gif";
import BusinessComp from "../BusinessComp/BusinessComp";
import { MarketingData } from "./MarketingData";

const Marketing = () => {
  return (
    <>
      <BusinessComp
        data={MarketingData}
        image={image}
        book={book}
        heading="Marketing"
      />
    </>
  );
};

export default Marketing;
