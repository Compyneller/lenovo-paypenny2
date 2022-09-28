import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
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
          <Row className="g-3">
            <Col sm={12} lg={6} className="d-flex align-items-center">
              <Card className="policy-card">
                <Card.Body>
                  <ol className="d-flex flex-column">
                    {PoliciesData.map((items, index) => {
                      return (
                        <a
                          href={items.file}
                          key={index}
                          className="policies-list mb-3">
                          <li>{items.name}</li>
                        </a>
                      );
                    })}
                  </ol>
                </Card.Body>
              </Card>
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

export default Policies;
