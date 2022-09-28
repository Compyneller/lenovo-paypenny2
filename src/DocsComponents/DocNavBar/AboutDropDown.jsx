import React from "react";
import { Card, Nav } from "react-bootstrap";

const AboutDropDown = () => {
  return (
    <Card style={{ width: "fit-content", border: "none" }}>
      <Card.Body>
        <div className="about-text-container ">
          <img
            src="https://img.icons8.com/fluency/344/globe.png"
            height={80}
            alt=""
          />
          <p className="doc__p">Learn more about Paypenny Business</p>
        </div>
      </Card.Body>
      <Card.Footer style={{ background: "#ffff" }}>
        <Nav.Link
          className="text-light"
          href="/docs/our-story"
          style={{ zIndex: "1000" }}>
          <h5 className="text-primary">Our Story</h5>
        </Nav.Link>
      </Card.Footer>
    </Card>
  );
};

export default AboutDropDown;
