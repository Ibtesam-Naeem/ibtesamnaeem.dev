import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "./Link";
import "./styles/Header.scss";

const sections = [
  "about",
  "skills",
  "experience",
  "projects",
  "education",
  "contact",
];

const Header = () => {
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="md"
      variant="light"
      bg="light"
      className="header"
    >
      <Navbar.Brand className="mr-auto">
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {sections.map((section) => (
            <Link key={section} section={section} />
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
