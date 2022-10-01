import React from "react";
import BusinessComp from "../BusinessComp/BusinessComp";
import image from "../../../PayPennyDocument/80230-employee.gif";
import book from "../../../PayPennyDocument/268-avatar-man-lineal.gif";
import { CVData } from "./CVData";
const CV = () => {
  return (
    <>
      <BusinessComp image={image} data={CVData} heading="CV's" book={book} />
    </>
  );
};

export default CV;
