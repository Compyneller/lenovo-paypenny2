import React, { useState } from "react";
import { Card, Nav, NavDropdown } from "react-bootstrap";
const CustomerServiceDropdown = () => {
  return (
    <NavDropdown
      className="docs-navbar-dropdown"
      title={
        <span className="text-light my-auto">
          Customer Service
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
        className="customerDropdown"
        style={{
          background: "none",
        }}
        href="/docs/cse">
        <Card
          className="customerDropdownCard"
          style={{ width: "fit-content", border: "none" }}>
          <Card.Body>
            <div className="about-text-container ">
              <img
                src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-customer-copywriting-flaticons-lineal-color-flat-icons.png"
                height={80}
                alt=""
              />
              <p className="doc__p">
                Customer service is not just a department but they are the
                assets of the company
              </p>
            </div>
          </Card.Body>
          <Card.Footer style={{ background: "#ffff" }}>
            <Nav.Link
              className="text-light"
              href="/docs/cse"
              style={{ zIndex: "1000" }}>
              <h5 className="text-primary">Customer Service</h5>
            </Nav.Link>
          </Card.Footer>
        </Card>
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default CustomerServiceDropdown;
