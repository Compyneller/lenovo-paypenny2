import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DocNav from "../../../DocsComponents/DocNavBar/DocNav";
import "../Passport/Passport.scss";
import image from "../../../PayPennyDocument/69149-adress.gif";
import { AddressData } from "./AddressData";

const AddressProof = () => {
  return (
    <>
      <DocNav />
      <div className="passport-container">
        <Container className="py-5">
          <h1>Address Proof</h1>
          <Row className="g-5">
            <Col
              sm={12}
              lg={6}
              className="d-flex flex-column justify-content-center">
              {AddressData.map((items, index) => {
                return <a href={items.file}>{items.name}</a>;
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

export default AddressProof;
