import { Card, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import interact from "../../Assets/Interac_Brand.png";

import logo from "../../Assets/Logo-01.png";
import AboutDropDown from "./AboutDropDown";
import BlogDropDown from "./BlogDropDown";
import CustomerServiceDropdown from "./CustomerServiceDropdown";
const DocNav = () => {
  console.log(JSON.parse(localStorage.getItem("ip")));
  return (
    <>
      <Navbar expand="lg" style={{ background: "#000" }}>
        <Container fluid className="px-2 px-lg-5">
          <Navbar.Brand href="/" style={{ width: "fit-content" }}>
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
            <Nav className="ms-auto ">
              <Nav.Link
                className="text-light"
                href="https://www.interac.ca/en/content/life/three-reasons-to-set-up-interac-e-transfer-autodeposit-today/"
                target="_blank">
                <img src={interact} alt="" height={40} />
              </Nav.Link>
              <NavDropdown
                className="docs-navbar-dropdown"
                title={
                  <span className="text-light my-auto">
                    About{" "}
                    <img
                      height={15}
                      className="ms-2"
                      src="https://img.icons8.com/ios-filled/344/expand-arrow.png"
                      style={{ filter: "invert(1)" }}
                      alt=""
                    />
                  </span>
                }
                id="basic-nav-dropdown">
                <NavDropdown.Item
                  style={{ background: "none" }}
                  href="/docs/our-story">
                  <AboutDropDown />
                </NavDropdown.Item>
              </NavDropdown>
              <BlogDropDown />

              <CustomerServiceDropdown />
              {JSON.parse(localStorage.getItem("ip")) === "49.36.213.215" ? (
                <Nav.Link href="/documents" className="text-light">
                  Business
                </Nav.Link>
              ) : null}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default DocNav;
