import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DocNav from "../../../DocsComponents/DocNavBar/DocNav";
import "../MinutesBooks/MinutesBooks.scss";
import image from "../../../PayPennyDocument/27506-search-for-employee.gif";
const Employees = () => {
  return (
    <>
      <DocNav />
      <div className="minutebook-container">
        <Container className="py-5">
          <h1 className="text-center">Employee</h1>
          <br />
          <br />
          <Row className="g-5">
            <Col
              sm={12}
              lg={6}
              className="d-flex flex-column justify-content-center">
              <a href="">Employee Contracts</a>
              <a href="">Aadhar Card</a>
              <a href="">Pan Card</a>
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

export default Employees;
