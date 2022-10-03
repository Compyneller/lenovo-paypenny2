import React from "react";
import { Card, Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import DocNav from "../../../DocsComponents/DocNavBar/DocNav";
import "../Policies/Policies.scss";
const BusinessComp = ({ data, image, book, heading }) => {
  return (
    <>
      <DocNav />
      <div className="policy-container">
        <Container className="py-5">
          <div className="d-flex align-items-center justify-content-center">
            <h1>{heading}</h1>
            <img src={book} height={80} alt="" />
          </div>
          <br />
          <br />
          <Row className="g-4">
            {data.map((items, index) => {
              return (
                <Col xs={12} sm={6} md={4} lg={3}>
                  <Nav.Link
                    href={items.link}
                    key={index}
                    className="policies-list w-100">
                    <Card className="policy-card w-100 ">
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

export default BusinessComp;
