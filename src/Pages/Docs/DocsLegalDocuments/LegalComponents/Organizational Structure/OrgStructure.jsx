import React from "react";
import doc1 from "../../../../../Documents/Organisational Structure/Trackon AML & CTF Policy.pdf";
import doc2 from "../../../../../Documents/Organisational Structure/Trackon AML & CTF Procedures for All Staff.pdf";
import doc3 from "../../../../../Documents/Organisational Structure/Trackon AML & CTF Procedures for Compliance Staff.pdf";
import doc4 from "../../../../../Documents/Organisational Structure/Trackon Canada Privacy Policy.pdf";
import doc5 from "../../../../../Documents/Organisational Structure/Trackon ML & TF Risk Assessment Final 2021Aug04 - Copy.pdf";
import doc6 from "../../../../../Documents/Organisational Structure/1. Authentication _ Identity Management Policy - Copy (2).pdf";
import doc7 from "../../../../../Documents/Organisational Structure/2. Password Management Policy V1.0.pdf";
import doc8 from "../../../../../Documents/Organisational Structure/3. Vulnerability Management policy and procedure^.pdf";
import doc9 from "../../../../../Documents/Organisational Structure/4. Remediation of Vulnerabilities and required Patches^.pdf";
import doc10 from "../../../../../Documents/Organisational Structure/5. Communications policy and procedure^.pdf";
import doc11 from "../../../../../Documents/Organisational Structure/6. Security policy and procedures^.pdf";
import doc12 from "../../../../../Documents/Organisational Structure/7. Asset Management policy or procedure^.pdf";
import doc13 from "../../../../../Documents/Organisational Structure/8. Systems Development Lifecycle (SDLC) policy and procedure^.pdf";
import doc14 from "../../../../../Documents/Organisational Structure/9. Asset onboarding and off-boarding Process^.pdf";
import doc15 from "../../../../../Documents/Organisational Structure/10. Disaster Recovery policy or procedure^.pdf";
import doc16 from "../../../../../Documents/Organisational Structure/11. Data Categorization and Classification policy or Procedure (1).pdf";
import doc17 from "../../../../../Documents/Organisational Structure/12. Incident Management and Response Policy (1).pdf";
import doc18 from "../../../../../Documents/Organisational Structure/13. Log Management or Network Monitoring policy^.pdf";
import doc19 from "../../../../../Documents/Organisational Structure/14. Documented Fraud Prevention program^.pdf";
import doc20 from "../../../../../Documents/Organisational Structure/15. Segregation of Duties policy and procedure. (1).pdf";
import doc21 from "../../../../../Documents/Organisational Structure/16. Change management process (1).pdf";
import { Col, Row } from "react-bootstrap";
const OrgStructure = () => {
  return (
    <>
      <h5 className="my-auto">Policies</h5>
      <hr />
      <Row className="g-3">
        <Col sm={12} lg={6}>
          <div className="d-flex flex-column ">
            <a className="legal-dropdown-link" href={doc1} target="_blank">
              Trackon AML & CTF Policy{" "}
            </a>

            <a className="legal-dropdown-link" href={doc2} target="_blank">
              Trackon AML & CTF Procedures for All Staff{" "}
            </a>

            <a className="legal-dropdown-link" href={doc3} target="_blank">
              Trackon AML & CTF Procedures for Compliance Staff{" "}
            </a>

            <a className="legal-dropdown-link" href={doc4} target="_blank">
              Trackon Canada Privacy Policy{" "}
            </a>

            <a className="legal-dropdown-link" href={doc5} target="_blank">
              Trackon ML & TF Risk Assessment
            </a>

            <a className="legal-dropdown-link" href={doc6} target="_blank">
              Authentication _ Identity Management Policy
            </a>

            <a className="legal-dropdown-link" href={doc7} target="_blank">
              Password Management Policy V1.0
            </a>

            <a className="legal-dropdown-link" href={doc8} target="_blank">
              Vulnerability Management policy and procedure
            </a>

            <a className="legal-dropdown-link" href={doc9} target="_blank">
              Remediation of Vulnerabilities and required Patches{" "}
            </a>

            <a className="legal-dropdown-link" href={doc10} target="_blank">
              Communications policy and procedure{" "}
            </a>

            <a className="legal-dropdown-link" href={doc11} target="_blank">
              Security policy and procedures{" "}
            </a>

            <a className="legal-dropdown-link" href={doc12} target="_blank">
              Asset Management policy or procedure{" "}
            </a>
          </div>
        </Col>
        <Col sm={12} lg={6}>
          <div className="d-flex flex-column ">
            <a className="legal-dropdown-link" href={doc13} target="_blank">
              Systems Development Lifecycle (SDLC) policy and procedure{" "}
            </a>

            <a className="legal-dropdown-link" href={doc14} target="_blank">
              Asset onboarding and off-boarding Process{" "}
            </a>

            <a className="legal-dropdown-link" href={doc15} target="_blank">
              Disaster Recovery policy or procedure{" "}
            </a>

            <a className="legal-dropdown-link" href={doc16} target="_blank">
              Data Categorization and Classification policy or Procedure{" "}
            </a>

            <a className="legal-dropdown-link" href={doc17} target="_blank">
              Incident Management and Response Policy{" "}
            </a>

            <a className="legal-dropdown-link" href={doc18} target="_blank">
              Log Management or Network Monitoring policy{" "}
            </a>

            <a className="legal-dropdown-link" href={doc19} target="_blank">
              Documented Fraud Prevention program{" "}
            </a>

            <a className="legal-dropdown-link" href={doc20} target="_blank">
              Segregation of Duties policy and procedure{" "}
            </a>

            <a className="legal-dropdown-link" href={doc21} target="_blank">
              Change management process{" "}
            </a>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default OrgStructure;
