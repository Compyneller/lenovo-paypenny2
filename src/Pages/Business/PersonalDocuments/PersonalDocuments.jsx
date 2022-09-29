import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import DocNav from "../../../DocsComponents/DocNavBar/DocNav";
import image from "../../../PayPennyDocument/101190-verify-personal-documents-ekyc.gif";
import "./PersonalDocument.scss";
const PersonalDocuments = () => {
  return (
    <>
      <DocNav />
      <div className="personalDocuments-container">
        <Container className="py-5">
          <h1>Directors & Shareholders Personal Documents</h1>
          <Row className="g-5">
            <Col
              sm={12}
              lg={6}
              className="d-flex flex-column justify-content-center align-items-center">
              <Link to="/passport">Passport</Link>
              <Link to="/driving-license">Driving License</Link>
              <Link to="/address-proof">Address Proof</Link>
              {/* <a target="_blank" href="">
                Shareholders ledgers
              </a>
              <a target="_blank" href="">
                Shareholders Minutes
              </a>
              <a target="_blank" href="">
                Shareholders Register
              </a>
              <a target="_blank" href="">
                Unanimous shareholder agreements-Annual reports
              </a> */}
            </Col>
            <Col sm={12} lg={6}>
              <img
                src={image}
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

export default PersonalDocuments;
