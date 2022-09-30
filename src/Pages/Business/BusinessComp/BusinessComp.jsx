import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import DocNav from "../../../DocsComponents/DocNavBar/DocNav";
import "../MinutesBooks/MinutesBooks.scss";
const BusinessComp = ({ data, image, book, heading }) => {
  return (
    <>
      <DocNav />
      <div className="minutebook-container">
        <Container className="py-5">
          <div className="d-flex align-items-center justify-content-center">
            <h1>{heading}</h1>
            <img src={book} height={80} alt="" />
          </div>
          <br />
          <br />
          <Row className="g-5">
            <Col
              sm={12}
              lg={6}
              className="d-flex flex-column justify-content-center">
              {data.map((items, index) => {
                return (
                  <Link to={items.link} key={index}>
                    {items.name}
                  </Link>
                );
              })}
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

export default BusinessComp;
