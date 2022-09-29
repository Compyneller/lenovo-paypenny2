import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../MinutesBooks/MinutesBooks.scss";
import doc1 from "../../../Documents/Certificate of Incorporation Trackon.pdf";
import doc2 from "../../../Documents/Articles of Incorporation Trackon.pdf";
import doc3 from "../../../Documents/Trackon Canada Organizational Structure.pdf";
import image from "../../../PayPennyDocument/72264-certificate.gif";
import DocNav from "../../../DocsComponents/DocNavBar/DocNav";
const Incorporation = () => {
  return (
    <>
      <DocNav />

      <div className="minutebook-container">
        <Container className="py-5">
          <Row className="g-3">
            <Col
              sm={12}
              lg={6}
              className="d-flex flex-column justify-content-center">
              <a href={doc1} target="_blank">
                Certificate of Incorporation
              </a>
              <a href={doc2} target="_blank">
                Articles of Incorporation Trackon
              </a>
              <a href={doc3} target="_blank">
                Organizational Structure
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

export default Incorporation;
