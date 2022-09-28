import React from "react";
import { Modal, Button, Row, Col, Card } from "react-bootstrap";
import "./MinuteBooks.scss";
import doc1 from "../../../../../Documents/MinuteBook/Unanimous shareholder agreements-Annual reports.pdf";
import doc2 from "../../../../../Documents/MinuteBook/Directors Minutes.pdf";
import doc3 from "../../../../../Documents/MinuteBook/Shareholders Minutes.pdf";
import doc4 from "../../../../../Documents/MinuteBook/Directors Register.pdf";
import doc5 from "../../../../../Documents/MinuteBook/Shareholders Register.pdf";
import doc6 from "../../../../../Documents/MinuteBook/Shareholders ledgers.pdf";
import doc7 from "../../../../../Documents/MinuteBook/Share Certificates.pdf";
import doc1image from "../../../../../Documents/MinuteBook/images/Screenshot 2022-09-23 120514.png";
import doc2image from "../../../../../Documents/MinuteBook/images/Screenshot 2022-09-23 121450.png";
import doc3image from "../../../../../Documents/MinuteBook/images/Screenshot 2022-09-23 121855.png";
import doc4image from "../../../../../Documents/MinuteBook/images/Screenshot 2022-09-23 122138.png";
import doc5image from "../../../../../Documents/MinuteBook/images/Screenshot 2022-09-23 122409.png";
import doc6image from "../../../../../Documents/MinuteBook/images/Screenshot 2022-09-23 122620.png";
import doc7image from "../../../../../Documents/MinuteBook/images/Screenshot 2022-09-23 122835.png";
const MinuteBookModal = (props) => {
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
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Minute Book
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="g-3">
          <Col xs={12} sm={6} md={4} lg={4}>
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
                  Unanimous shareholder agreements-Annual reports
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <Card
              style={{ width: "100%", height: "100%" }}
              className="doc-legal-card shadow"
              data-aos="zoom-out">
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
                  Directors Minutes{" "}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <Card
              style={{ width: "100%", height: "100%" }}
              className="doc-legal-card shadow"
              data-aos="zoom-out">
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
                  Shareholders Minutes{" "}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <Card
              style={{ width: "100%", height: "100%" }}
              className="doc-legal-card shadow"
              data-aos="zoom-out">
              <Card.Img
                variant="top"
                src={doc4image}
                height={200}
                style={{ objectFit: "cover" }}
              />
              <div className="doc-card-hover">
                <a
                  href={doc4}
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
                  onClick={() => downloadPDF(doc4)}
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
                  Directors Register{" "}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <Card
              style={{ width: "100%", height: "100%" }}
              className="doc-legal-card shadow"
              data-aos="zoom-out">
              <Card.Img
                variant="top"
                src={doc5image}
                height={200}
                style={{ objectFit: "cover" }}
              />
              <div className="doc-card-hover">
                <a
                  href={doc5}
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
                  onClick={() => downloadPDF(doc5)}
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
                  Shareholders Register{" "}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <Card
              style={{ width: "100%", height: "100%" }}
              className="doc-legal-card shadow"
              data-aos="zoom-out">
              <Card.Img
                variant="top"
                src={doc6image}
                height={200}
                style={{ objectFit: "cover" }}
              />
              <div className="doc-card-hover">
                <a
                  href={doc6}
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
                  onClick={() => downloadPDF(doc6)}
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
                  Shareholders ledgers{" "}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <Card
              style={{ width: "100%", height: "100%" }}
              className="doc-legal-card shadow"
              data-aos="zoom-out">
              <Card.Img
                variant="top"
                src={doc7image}
                height={200}
                style={{ objectFit: "cover" }}
              />
              <div className="doc-card-hover">
                <a
                  href={doc7}
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
                  onClick={() => downloadPDF(doc7)}
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
                  Share Certificates{" "}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MinuteBookModal;
