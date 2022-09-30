import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import DocNav from "../../../DocsComponents/DocNavBar/DocNav";
import hr from "../../../PayPennyDocument/100618-career.gif";

const HR = () => {
  return (
    <>
      <DocNav />
      <div className="minutebook-container">
        <Container className="py-5">
          <Row className="g-5">
            <Col
              sm={12}
              lg={6}
              className="d-flex flex-column justify-content-center">
              <a href="">Policy</a>
              <a href="">Job Advert</a>
              <a href="">Job Description</a>
              <a href="">Performance Review</a>
              <Link to="/employees">Employees</Link>
            </Col>
            <Col sm={12} lg={6}>
              <img src={hr} alt="" className="w-100" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HR;