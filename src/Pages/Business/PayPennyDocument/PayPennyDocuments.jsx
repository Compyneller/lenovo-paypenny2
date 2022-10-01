import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DocNav from "../../../DocsComponents/DocNavBar/DocNav";
import { PayPennyDocData } from "./PayPennyDocData";
import "./PayPennyDocuments.scss";
import video from "../../../PayPennyDocument/mixkit-stars-floating-in-the-dark-universe-32982-medium.mp4";
const PayPennyDocuments = () => {
  const navigate = useNavigate();
  return (
    <>
      <DocNav />
      <div className="paypenny-documents-container">
        <video src={video} muted autoPlay loop></video>
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
