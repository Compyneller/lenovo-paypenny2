import React from "react";
import { Button, Card } from "react-bootstrap";
import "../../DocsLegal.scss";
import doc1 from "../../../../../Documents/MinuteBook/Unanimous shareholder agreements-Annual reports.pdf";
import doc2 from "../../../../../Documents/MinuteBook/Directors Minutes.pdf";
import doc3 from "../../../../../Documents/MinuteBook/Shareholders Minutes.pdf";
import doc4 from "../../../../../Documents/MinuteBook/Directors Register.pdf";
import doc5 from "../../../../../Documents/MinuteBook/Shareholders Register.pdf";
import doc6 from "../../../../../Documents/MinuteBook/Shareholders ledgers.pdf";
import doc7 from "../../../../../Documents/MinuteBook/Share Certificates.pdf";
const MinuteBooks = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <h5 className="my-auto">Minutes Book</h5>
      <hr />
      <div className="d-flex flex-column">
        <a className="legal-dropdown-link" href={doc1} target="_blank">
          {" "}
          Unanimous shareholder agreements-Annual reports
        </a>{" "}
        <a className="legal-dropdown-link" href={doc2} target="_blank">
          {" "}
          Directors Minutes{" "}
        </a>{" "}
        <a className="legal-dropdown-link" href={doc3} target="_blank">
          {" "}
          Shareholders Minutes{" "}
        </a>{" "}
        <a className="legal-dropdown-link" href={doc4} target="_blank">
          {" "}
          Directors Register{" "}
        </a>{" "}
        <a className="legal-dropdown-link" href={doc5} target="_blank">
          {" "}
          Shareholders Register{" "}
        </a>{" "}
        <a className="legal-dropdown-link" href={doc6} target="_blank">
          {" "}
          Shareholders ledgers{" "}
        </a>{" "}
        <a className="legal-dropdown-link" href={doc7} target="_blank">
          {" "}
          Share Certificates{" "}
        </a>{" "}
      </div>
    </>
  );
};

export default MinuteBooks;
