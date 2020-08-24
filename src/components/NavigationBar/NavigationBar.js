import React from "react";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

export default (props) => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo of Sunshine Family Dental"
            />{" "}
            <strong>Sunshine Family Dental</strong>
          </Link>
          <Container>
            <a href="tel:9256009006" style={{ textDecoration: "none" }}>
              <small>(925)&middot;600&middot;9006</small>
            </a>
          </Container>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Nav.Link href="/" style={{ color: "#000" }}>
                Home
              </Nav.Link>
            </Link>
            <Link to="/COVID-19" style={{ textDecoration: "none" }}>
              <Nav.Link href="/COVID-19" style={{ color: "#000" }}>
                COVID-19
              </Nav.Link>
            </Link>
            <Link to="/About" style={{ textDecoration: "none" }}>
              <Nav.Link href="/About" style={{ color: "#000" }}>
                About
              </Nav.Link>
            </Link>
            <NavDropdown
              title="Services"
              id="basic-nav-dropdown"
              style={{ color: "rgba(0,0,0,1)" }}
            >
              <NavDropdown.Item>
                <Link to="/Services/Overview" style={{ color: "#000" }}>
                  Overview
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link
                  to="/Services/CleaningAndPrevention"
                  style={{ color: "#000" }}
                >
                  Cleaning & Prevention
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/Services/Dentures" style={{ color: "#000" }}>
                  Dentures
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/Services/Extractions" style={{ color: "#000" }}>
                  Extractions
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/Services/Implants" style={{ color: "#000" }}>
                  Implants
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/Services/Invisalign" style={{ color: "#000" }}>
                  Invisalign
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/Services/Restorations" style={{ color: "#000" }}>
                  Restorations
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/Services/RootCanals" style={{ color: "#000" }}>
                  Root Canals
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/Services/Veneers" style={{ color: "#000" }}>
                  Veneers
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <Link to="/Forms" style={{ textDecoration: "none" }}>
              <Nav.Link href="/Forms" style={{ color: "#000" }}>
                Forms
              </Nav.Link>
            </Link>

            <Link to="/Insurance" style={{ textDecoration: "none" }}>
              <Nav.Link href="/Insurance" style={{ color: "#000" }}>
                Insurance
              </Nav.Link>
            </Link>
            <Link to="/Contact" style={{ textDecoration: "none" }}>
              <Nav.Link href="/Contact" style={{ color: "#000" }}>
                Contact
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
