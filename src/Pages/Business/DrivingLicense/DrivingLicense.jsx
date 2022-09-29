import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DocNav from "../../../DocsComponents/DocNavBar/DocNav";
import "../Passport/Passport.scss";
import image from "../../../PayPennyDocument/42809-driving-license-scanning.gif";
import doc1 from "../../../Documents/Driving License/Jaspreet Driver's Licence.pdf";
import doc2 from "../../../Documents/Driving License/LICENCE.pdf";
const DrivingLicense = () => {
  return (
    <>
      <DocNav />
      <div className="passport-container">
        <Container className="py-5">
          <h1>Driving License</h1>
          <Row className="g-5">
            <Col
              sm={12}
              lg={6}
              className="d-flex flex-column justify-content-center">
              <a href={doc1} target="_blank">
                Jaspreet Driving License
              </a>
              <a href={doc2} target="_blank">
                Kulpreet Singh
              </a>
            </Col>
            <Col sm={12} lg={6}>
              <img src={image} alt="" className="w-100" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default DrivingLicense;
