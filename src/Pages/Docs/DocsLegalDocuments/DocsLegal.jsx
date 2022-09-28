import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import DocNav from "../../../DocsComponents/DocNavBar/DocNav";
import doc1 from "../../../Documents/Articles of Incorporation Trackon.pdf";
import doc2 from "../../../Documents/Certificate of Incorporation Trackon.pdf";
import doc3 from "../../../Documents/Trackon Canada Private Ltd Fintrac Letter.pdf";
import "./DocsLegal.scss";
import doc1image from "../../../Documents/Screenshot 2022-09-23 111920.png";
import doc2image from "../../../Documents/Screenshot 2022-09-23 111958.png";
import doc3image from "../../../Documents/Screenshot 2022-09-23 112522.png";
import MinuteBooks from "./LegalComponents/MinuteBooks/MinuteBooks";

const DocsLegal = () => {
  const downloadPDF = (name) => {
    fetch(`${name}`).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = name;
        alink.click();
      });
    });
  };
  return (
    <>
      <DocNav />
      <div className="doc-legal-container">
        <Container className="py-5">
          <h1
            className="text-center text-light mb-5"
            style={{ fontSize: "50px", fontWeight: "bold" }}>
            Our Business Documents
          </h1>
          <Row className="g-3">
            <Col xs={12} sm={6} md={4} lg={3}>
              <Card
                style={{ width: "100%", height: "100%" }}
                className="doc-legal-card shadow"
                data-aos="zoom-out">
                <Card.Img
                  variant="top"
                  src={doc1image}
                  height={200}
                  style={{ objectFit: "cover" }}
                />
                <div className="doc-card-hover">
                  <a
                    href={doc1}
                    target="_blank"
                    className="w-75"
                    style={{ textDecoration: "none" }}>
                    <Button
                      style={{
                        background: "#90EE90",
                        border: "none",
                        outline: "none",
                      }}
                      className="w-100 d-flex align-items-center justify-content-center">
                      <img
                        className="me-3"
                        src="https://img.icons8.com/ios/344/visible--v1.png"
                        alt=""
                        width={30}
                      />
                      <h5 className="my-auto text-dark">View</h5>
                    </Button>
                  </a>
                  <br />

                  <Button
                    variant="info"
                    onClick={() => downloadPDF(doc1)}
                    className=" w-75 d-flex align-items-center justify-content-center">
                    <img
                      className="me-3"
                      src="https://img.icons8.com/pastel-glyph/344/download--v1.png"
                      alt=""
                      width={30}
                    />
                    <h5 className="my-auto text-dark">Download</h5>
                  </Button>
                </div>
                <Card.Body>
                  <Card.Title className="text-center" as="h5">
                    Articles of Incorporation Trackon
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <Card
                style={{ width: "100%", height: "100%" }}
                className="doc-legal-card shadow"
                data-aos="zoom-out"
                data-aos-delay="200">
                <Card.Img
                  variant="top"
                  src={doc2image}
                  height={200}
                  style={{ objectFit: "cover" }}
                />
                <div className="doc-card-hover">
                  <a
                    href={doc2}
                    target="_blank"
                    className="w-75"
                    style={{ textDecoration: "none" }}>
                    <Button
                      style={{
                        background: "#90EE90",
                        border: "none",
                        outline: "none",
                      }}
                      className="w-100 d-flex align-items-center justify-content-center">
                      <img
                        className="me-3"
                        src="https://img.icons8.com/ios/344/visible--v1.png"
                        alt=""
                        width={30}
                      />
                      <h5 className="my-auto text-dark">View</h5>
                    </Button>
                  </a>
                  <br />

                  <Button
                    variant="info"
                    onClick={() => downloadPDF(doc2)}
                    className=" w-75 d-flex align-items-center justify-content-center">
                    <img
                      className="me-3"
                      src="https://img.icons8.com/pastel-glyph/344/download--v1.png"
                      alt=""
                      width={30}
                    />
                    <h5 className="my-auto text-dark">Download</h5>
                  </Button>
                </div>
                <Card.Body>
                  <Card.Title className="text-center" as="h5">
                    Certificate of Incorporation Trackon
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <Card
                style={{ width: "100%", height: "100%" }}
                className="doc-legal-card shadow"
                data-aos="zoom-out"
                data-aos-delay="300">
                <Card.Img
                  variant="top"
                  src={doc3image}
                  height={200}
                  style={{ objectFit: "cover" }}
                />
                <div className="doc-card-hover">
                  <a
                    href={doc3}
                    target="_blank"
                    className="w-75"
                    style={{ textDecoration: "none" }}>
                    <Button
                      style={{
                        background: "#90EE90",
                        border: "none",
                        outline: "none",
                      }}
                      className="w-100 d-flex align-items-center justify-content-center">
                      <img
                        className="me-3"
                        src="https://img.icons8.com/ios/344/visible--v1.png"
                        alt=""
                        width={30}
                      />
                      <h5 className="my-auto text-dark">View</h5>
                    </Button>
                  </a>
                  <br />

                  <Button
                    variant="info"
                    onClick={() => downloadPDF(doc3)}
                    className=" w-75 d-flex align-items-center justify-content-center">
                    <img
                      className="me-3"
                      src="https://img.icons8.com/pastel-glyph/344/download--v1.png"
                      alt=""
                      width={30}
                    />
                    <h5 className="my-auto text-dark">Download</h5>
                  </Button>
                </div>
                <Card.Body>
                  <Card.Title className="text-center" as="h5">
                    Trackon Canada Private Ltd Fintrac Letter{" "}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <MinuteBooks />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default DocsLegal;
