import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DocNav from "../../../DocsComponents/DocNavBar/DocNav";
import image from "../../../PayPennyDocument/62109-structure-screenshot.gif";
import { FintracData } from "./FintracData";
const FintracLicense = () => {
  return (
    <>
      <DocNav />
      <div className="passport-container">
        <Container className="py-5">
          <Row className="g-5">
            <Col
              sm={12}
              lg={6}
              className="d-flex flex-column justify-content-center">
              {FintracData.map((items, index) => {
                return (
                  <a href={items.file} key={index} target="_blank">
                    {items.name}
                  </a>
                );
              })}
            </Col>
            <Col
              sm={12}
              lg={6}
              className="d-flex flex-column justify-content-center">
              <img src={image} alt="" className="w-100" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default FintracLicense;
