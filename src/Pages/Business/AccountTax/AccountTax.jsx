import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DocNav from "../../../DocsComponents/DocNavBar/DocNav";
import "../MinutesBooks/MinutesBooks.scss";
import book from "../../../PayPennyDocument/1010-department-flat.gif";
import account from "../../../PayPennyDocument/25227-accountant.gif";

const AccountTax = () => {
  return (
    <>
      <DocNav />
      <div className="minutebook-container">
        <Container className="py-5">
          <div className="d-flex align-items-center justify-content-center">
            <h1>Account & Tax</h1>
            <img src={book} height={80} alt="" />
          </div>
          <br />
          <br />
          <Row className="g-5">
            <Col
              sm={12}
              lg={6}
              className="d-flex flex-column justify-content-center">
              <a href="">Invoice</a>
              <a href="">Tax Documents</a>
              <a href="">Recons</a>
              <a href="">Expenses</a>
            </Col>
            <Col sm={12} lg={6}>
              <img src={account} alt="" className="w-100" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AccountTax;
