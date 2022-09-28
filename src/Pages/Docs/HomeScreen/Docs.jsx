import React from "react";
import "./Docs.scss";
import video from "../../../doc-assets/network-background-blockchain-2021-09-04-10-44-53-utc.mp4";
import DocNav from "../../../DocsComponents/DocNavBar/DocNav";
import { Card, Col, Container, Row } from "react-bootstrap";
import DocsMobileNavBar from "../../../DocsComponents/DocNavBar/DocsMobileNavBar";
import Section1 from "../../../DocsComponents/Section1/Section1";
import Section2 from "../../../DocsComponents/Section1/Section2";
import Section3 from "../../../DocsComponents/Section1/Section3";
const Docs = () => {
  return (
    <>
      {window.innerWidth > 950 ? <DocNav /> : <DocsMobileNavBar />}
      <div className="docs__container">
        <video src={video} muted autoPlay loop />
        <Container>
          <h1 className="doc__heading">
            How to transfer money from Canada to India without any charges? -
            Paypenny
          </h1>
          <h5 className="doc__subHeading">
            Money transfer from Canada to India | zero charges for money
            transfer to India
          </h5>
        </Container>
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  );
};

export default Docs;
