import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../Assets/Logo-01.png";
import LegalModal from "./LegalModal";
import interact from "../../Assets/Interac_Brand.png";

const DocsMobileNavBar = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              alt=""
              className="nav__logo"
              style={{ height: "8vh" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ filter: "invert(1)" }}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                className="text-light "
                href="https://www.interac.ca/en/content/life/three-reasons-to-set-up-interac-e-transfer-autodeposit-today/"
                target="_blank">
                <img src={interact} alt="" height={40} />
              </Nav.Link>
              <Nav.Link className="text-light" href="/docs/our-story">
                About
              </Nav.Link>
              <Nav.Link className="text-light" href="/docs/blog">
                Blog
              </Nav.Link>

              <Nav.Link className="text-light" href="/docs/cse">
                Customer
              </Nav.Link>
              <Nav.Item
                className="text-light"
                onClick={() => setModalShow(true)}>
                Legal
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LegalModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default DocsMobileNavBar;
