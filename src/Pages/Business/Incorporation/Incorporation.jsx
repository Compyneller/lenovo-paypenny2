import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../MinutesBooks/MinutesBooks.scss";
import doc1 from "../../../Documents/Certificate of Incorporation Trackon.pdf";
import doc2 from "../../../Documents/Articles of Incorporation Trackon.pdf";
import doc3 from "../../../Documents/Trackon Canada Organizational Structure.pdf";
import image from "../../../PayPennyDocument/72264-certificate.gif";
import DocNav from "../../../DocsComponents/DocNavBar/DocNav";
import BusinessComp from "../BusinessComp/BusinessComp";
import { IncorporationData } from "./IncorporationData";
const Incorporation = () => {
  return (
    <>
      <BusinessComp data={IncorporationData} heading="Incorporation" />
    </>
  );
};

export default Incorporation;
