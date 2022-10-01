import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DocNav from "../../../DocsComponents/DocNavBar/DocNav";
import "../MinutesBooks/MinutesBooks.scss";
import legal from "../../../PayPennyDocument/58918-legal-statement.gif";
import { Link, useNavigate } from "react-router-dom";
import BusinessComp from "../BusinessComp/BusinessComp";
import { CompanyLegalDocData } from "./CompanyLegalDocData";
const CompanyLegalDocument = () => {
  const navigate = useNavigate();
  return (
    <>
      <BusinessComp
        data={CompanyLegalDocData}
        heading="Company Legal Documents"
      />
    </>
  );
};

export default CompanyLegalDocument;
