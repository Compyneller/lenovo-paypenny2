import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DocNav from "../../../DocsComponents/DocNavBar/DocNav";
import { PassportData } from "./PassportData";
import image from "../../../PayPennyDocument/61846-visa-stamp-passport.gif";
import "./Passport.scss";
import BusinessComp from "../BusinessComp/BusinessComp";
const Passport = () => {
  return (
    <>
      <BusinessComp data={PassportData} heading="Passport" />
    </>
  );
};

export default Passport;
