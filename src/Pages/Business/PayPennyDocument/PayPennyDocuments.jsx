import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DocNav from "../../../DocsComponents/DocNavBar/DocNav";
import { PayPennyDocData } from "./PayPennyDocData";
import "./PayPennyDocuments.scss";

const PayPennyDocuments = () => {
  const navigate = useNavigate();
  return (
    <>
      <DocNav />
      <div className="paypenny-documents-container">
        <Container className="py-5">
          <div className="paypenny-doc-text">
            <section className="section__container">
              <div className="content">
                <h2>PayPenny</h2>
              </div>
              <div className="content2">
                <h2>Documents</h2>
              </div>
            </section>
          </div>
          <br />
          <br />

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
