import React from "react";
import BusinessComp from "../../../BusinessComp/BusinessComp";
import { PaymentData } from "./PaymentData";

const Payment = () => {
  return (
    <>
      <BusinessComp data={PaymentData} heading="Payment Gateway" />
    </>
  );
};

export default Payment;
