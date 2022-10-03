import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DocNav from "../../../DocsComponents/DocNavBar/DocNav";
import { PayPennyDocData } from "./PayPennyDocData";
import "./PayPennyDocuments.scss";
import test1 from "./test2.svg";
import test2 from "./test3.svg";
import test3 from "./test.svg";
const PayPennyDocuments = () => {
  const navigate = useNavigate();
  return (
    <>
      <DocNav />
      <div className="paypenny-documents-container">
        <div className="svg-container">
          <div className="left-svg">
            <img src={test1} alt="" />
            <br />
            <br />
            <br />
            <img src={test2} alt="" />
          </div>
          <div className="right-svg">
            <img src={test3} alt="" />
          </div>
        </div>
        <Container className="py-5">
          <Row className="g-3">
            <br />
            {PayPennyDocData.map((items, index) => {
              return (
                <Col xs={12} sm={6} md={4} lg={3} key={index}>
                  <Card
                    className="document-card"
                    onClick={() => navigate(items.link)}>
                    <Card.Body>
                      <img src={items.img} alt="" />
                      <h5 className="mt-2">{items.name}</h5>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default PayPennyDocuments;
