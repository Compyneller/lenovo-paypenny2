import React, { useState } from "react";
import { Card, Nav, NavDropdown } from "react-bootstrap";
import AboutDropDown from "./AboutDropDown";

const BlogDropDown = () => {
  return (
    <NavDropdown
      className="docs-navbar-dropdown"
      title={
        <span className="text-light my-auto">
          Blog{" "}
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
      <NavDropdown.Item style={{ background: "none" }} href="/docs/blog">
        <Card style={{ width: "fit-content", border: "none" }}>
          <Card.Body>
            <div className="about-text-container ">
              <img
                src="https://img.icons8.com/color/344/bitcoin-sccepted.png"
                height={80}
                alt=""
              />
              <p className="doc__p">Crypto the future?</p>
            </div>
          </Card.Body>
          <Card.Footer style={{ background: "#ffff" }}>
            <Nav.Link
              className="text-light"
              href="/docs/blog"
              style={{ zIndex: "1000" }}>
              <h5 className="text-primary">Blog</h5>
            </Nav.Link>
          </Card.Footer>
        </Card>
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default BlogDropDown;
