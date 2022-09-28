import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DocNav from "../../../DocsComponents/DocNavBar/DocNav";
import "./MinutesBooks.scss";
import book from "../../../PayPennyDocument/112-book-morph-outline.gif";
import book2 from "../../../PayPennyDocument/99349-girl-with-books.gif";
import doc1 from "../../../Documents/MinuteBook/Directors Minutes.pdf";
import doc2 from "../../../Documents/MinuteBook/Directors Register.pdf";
import doc3 from "../../../Documents/MinuteBook/Share Certificates.pdf";
import doc4 from "../../../Documents/MinuteBook/Shareholders ledgers.pdf";
import doc5 from "../../../Documents/MinuteBook/Shareholders Minutes.pdf";
import doc6 from "../../../Documents/MinuteBook/Shareholders Register.pdf";
import doc7 from "../../../Documents/MinuteBook/Unanimous shareholder agreements-Annual reports.pdf";
const MinutesBooks = () => {
  return (
    <>
      <DocNav />
      <div className="minutebook-container bg-light">
        <Container className="py-5">
          <div className="d-flex align-items-center justify-content-center">
            <h1>Minutes Book</h1>
            <img src={book} height={80} alt="" />
          </div>
          <br />
          <br />
          <Row className="g-4">
            <Col sm={12} lg={6} className="d-flex align-items-center">
              <ol className="w-100">
                <a target="_blank" href={doc1}>
                  <li>Directors Minutes</li>
                </a>
                <a target="_blank" href={doc2}>
                  <li>Directors Register</li>
                </a>
                <a target="_blank" href={doc3}>
                  <li>Share Certificates</li>
                </a>
                <a target="_blank" href={doc4}>
                  <li>Shareholders ledgers</li>
                </a>
                <a target="_blank" href={doc5}>
                  <li>Shareholders Minutes</li>
                </a>
                <a target="_blank" href={doc6}>
                  <li>Shareholders Register</li>
                </a>
                <a target="_blank" href={doc7}>
                  <li>Unanimous shareholder agreements-Annual reports</li>
                </a>
              </ol>
            </Col>
            <Col sm={12} lg={6}>
              <img src={book2} alt="" className="w-100" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MinutesBooks;
