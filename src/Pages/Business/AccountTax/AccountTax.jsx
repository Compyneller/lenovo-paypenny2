import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DocNav from "../../../DocsComponents/DocNavBar/DocNav";
import "../MinutesBooks/MinutesBooks.scss";
import BusinessComp from "../BusinessComp/BusinessComp";
import { AccountTaxData } from "./AccountTaxData";

const AccountTax = () => {
  return (
    <>
      <BusinessComp data={AccountTaxData} heading="Account & Tax" />
    </>
  );
};

export default AccountTax;
