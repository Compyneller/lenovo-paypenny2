import React, { useState } from "react";
import { Link } from "react-router-dom";
import interact from "../../Assets/Interac_Brand.png";
import earn from "../../Assets/Earn-logo.gif";
import logo from "../../Assets/Logo-01.png";
import eu from "../../Assets/download.png";
import uk from "../../Assets/uk.png";
import canada from "../../Assets/oie_vR2XglQK4nD4.png";
import "./NavBar.scss";
import LegalDropDown from "../../DocsComponents/DocNavBar/LegalDropDown";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  const [euflag, setEuflag] = useState(false);
  const [ukFlag, setUkFlag] = useState(false);
  const [canadaFlag, setCanadaFlag] = useState(true);
  const [navBarActive, setNavBarActive] = useState(false);
  const [removeEarn, setRemoveEarn] = useState(true);
  return (
    <>
      <Navbar expand="lg" style={{ background: "#000" }}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              alt=""
              className="nav__logo"
              style={{ height: "8vh" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <a
                className="me-4"
                style={{ display: `${removeEarn ? "block" : "none"}` }}
                target="_blank"
                href="https://www.interac.ca/en/content/life/three-reasons-to-set-up-interac-e-transfer-autodeposit-today/">
                <img src={interact} alt="" height={50} />
              </a>
              <LegalDropDown />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
