import React from "react";
import BusinessComp from "../BusinessComp/BusinessComp";
import { BankAccountData } from "./BankAccountData";
import image from "../../../PayPennyDocument/63568-mobile-banking.gif";
import book from "../../../PayPennyDocument/947-investment-lineal.gif";
const BankAccount = () => {
  return (
    <>
      <BusinessComp
        data={BankAccountData}
        image={image}
        heading="Bank Account"
        book={book}
      />
    </>
  );
};

export default BankAccount;
