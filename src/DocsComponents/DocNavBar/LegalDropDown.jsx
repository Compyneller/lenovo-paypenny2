import React from "react";
import "./LegalDropdown.scss";
import { Card, Col, Container, Row } from "react-bootstrap";
import doc1 from "../../Documents/Articles of Incorporation Trackon.pdf";
import doc2 from "../../Documents/Certificate of Incorporation Trackon.pdf";
import doc3 from "../../Documents/Trackon Canada Private Ltd Fintrac Letter.pdf";
import doc4 from "../../Documents/Trackon Canada Organizational Structure.pdf";
import doc5 from "../../Documents/WhatsApp Image 2022-09-23 at 3.23.19 PM.pdf";
import doc6 from "../../Documents/Share Ownership Certificate.pdf";
import doc7 from "../../Documents/WhatsApp Image 2022-09-23 at 3.31.15 PM.pdf";
import doc8 from "../../Documents/By laws.pdf";

import MinuteBooks from "../../Pages/Docs/DocsLegalDocuments/LegalComponents/MinuteBooks/MinuteBooks";
import OrgStructure from "../../Pages/Docs/DocsLegalDocuments/LegalComponents/Organizational Structure/OrgStructure";

const LegalDropDown = () => {
  return (
    <Card className="legal-dropdown-card">
      <Card.Body>
        <Container>
          <Row className="g-3">
            <Col xs={12} sm={6} md={4} lg={3}>
              <h5 className="my-auto">Legal</h5>
              <hr />
              <div className="d-flex flex-column ">
                <a className="legal-dropdown-link" href={doc2} target="_blank">
                  {" "}
                  Incorporation Certificate
                </a>

                <a className="legal-dropdown-link" href={doc1} target="_blank">
                  {" "}
                  Articles of Incorporation
                </a>

                <a className="legal-dropdown-link" href={doc3} target="_blank">
                  {" "}
                  License - FINTRAC
                </a>

                <a className="legal-dropdown-link" href={doc4} target="_blank">
                  Organizational Structure
                </a>

                <a className="legal-dropdown-link" href={doc5} target="_blank">
                  Certificate of Status{" "}
                </a>

                <a className="legal-dropdown-link" href={doc6} target="_blank">
                  Share Ownership Certificate{" "}
                </a>

                <a className="legal-dropdown-link" href={doc8} target="_blank">
                  DBH Law{" "}
                </a>

                <a className="legal-dropdown-link" href={doc7} target="_blank">
                  Proof of filling(DBA){" "}
                </a>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <MinuteBooks />
            </Col>
            <Col xs={12} sm={6} md={4} lg={6}>
              <OrgStructure />
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default LegalDropDown;
