import React from "react";
import { Card, Col, Container, Nav, Row } from "react-bootstrap";
import DocNav from "../../../DocsComponents/DocNavBar/DocNav";
import image from "../../../PayPennyDocument/Taxi_woman_with_laptop_transparent_by_Icons8.gif";
import "./Policies.scss";
import { PoliciesData } from "./PoliciesData";
import book from "../../../PayPennyDocument/966-privacy-policy-lineal.gif";
const Policies = () => {
  return (
    <>
      <DocNav />
      <div className="policy-container">
        <Container className="py-5">
          <div className="d-flex align-items-center justify-content-center">
            <h1>Policy</h1>
            <img src={book} height={80} alt="" />
          </div>
          <br />
          <br />
          <Row className="g-4">
            {PoliciesData.map((items, index) => {
              return (
                <Col xs={12} sm={6} md={4} lg={3}>
                  <Nav.Link
                    href={items.file}
                    key={index}
                    className="policies-list mb-3">
                    <Card className="policy-card">
                      <Card.Body className="d-flex flex-column justify-content-center">
                        {items.name}
                      </Card.Body>
                    </Card>
                  </Nav.Link>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Policies;
