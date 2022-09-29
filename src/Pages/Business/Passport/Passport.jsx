import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DocNav from "../../../DocsComponents/DocNavBar/DocNav";
import { PassportData } from "./PassportData";
import image from "../../../PayPennyDocument/61846-visa-stamp-passport.gif";
import "./Passport.scss";
const Passport = () => {
  return (
    <>
      <DocNav />
      <div className="passport-container">
        <Container className="py-5">
          <h1>Passport</h1>
          <Row className="g-5">
            <Col
              sm={12}
              lg={6}
              className="d-flex flex-column justify-content-center">
              {PassportData.map((items, index) => {
                return (
                  <a href={items.file} key={index} target="_blank">
                    {items.name}
                  </a>
                );
              })}
            </Col>
            <Col sm={12} lg={6} className="d-flex align-items-center">
              <img src={image} alt="" className="w-100" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Passport;
