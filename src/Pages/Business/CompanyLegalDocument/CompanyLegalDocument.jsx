import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DocNav from "../../../DocsComponents/DocNavBar/DocNav";
import "./CompanyLegalDocument.scss";
import legal from "../../../PayPennyDocument/58918-legal-statement.gif";
import { useNavigate } from "react-router-dom";
const CompanyLegalDocument = () => {
  const navigate = useNavigate();
  return (
    <>
      <DocNav />
      <div className="cld-container">
        <Container className="py-5">
          <h1 className="text-center">Company Legal Documents</h1>
          <br />
          <br />

          <Row className="g-4">
            <Col
              sm={12}
              lg={6}
              className="d-flex flex-column justify-content-center">
              <div
                className="w-100 cld-content"
                onClick={() => navigate("/incorporation")}>
                <h5>Incorporation</h5>
              </div>
              <div
                className="w-100 cld-content"
                onClick={() => navigate("/minutebooks")}>
                <h5>Minutes Book</h5>
              </div>
              <div
                className="w-100 cld-content"
                onClick={() => navigate("/personal-documents")}>
                <h5>Directors & Shareholders Personal Documents</h5>
              </div>
              <div
                className="w-100 cld-content"
                onClick={() => navigate("/fintrac-license")}>
                <h5>FINTRAC License & Screenshot</h5>
              </div>
              <div className="w-100 cld-content">
                <h5>Certificate of Status</h5>
              </div>
            </Col>
            <Col sm={12} lg={6}>
              <img
                src={legal}
                alt=""
                className="w-100"
                style={{ borderRadius: "20px" }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CompanyLegalDocument;
