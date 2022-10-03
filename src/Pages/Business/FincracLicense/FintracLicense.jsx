import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DocNav from "../../../DocsComponents/DocNavBar/DocNav";
import image from "../../../PayPennyDocument/62109-structure-screenshot.gif";
import BusinessComp from "../BusinessComp/BusinessComp";
import { FintracData } from "./FintracData";
const FintracLicense = () => {
  return (
    <>
      <BusinessComp data={FintracData} heading="FINTRAC License & Screenshot" />
    </>
  );
};

export default FintracLicense;
