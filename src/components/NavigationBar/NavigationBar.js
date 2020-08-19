import React from "react";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

export default (props) => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg">
        <Link to="/">
          <Navbar.Brand>
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />{" "}
            Sunshine Family Dental
            <Container>
              <small>Dr. Srutee Dogra, DDS</small>
            </Container>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/">
              <Nav.Link href="/ ">Home</Nav.Link>
            </Link>
            <Link to="/COVID-19">
              <Nav.Link href="/COVID-19">COVID-19</Nav.Link>
            </Link>
            <Link to="/About">
              <Nav.Link href="/About">About</Nav.Link>
            </Link>
            <Link to="/Forms">
              <Nav.Link href="/Forms">Forms</Nav.Link>
            </Link>
            <Link to="/Insurance">
              <Nav.Link href="/Insurance">Insurance</Nav.Link>
            </Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/Services/Overview">Overview</Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/Services/CleaningAndPrevention">
                  Cleaning & Prevention
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/Services/Dentures">Dentures</Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/Services/Extractions">Extractions</Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/Services/Implants">Implants</Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/Services/Invisalign">Invisalign</Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/Services/Restorations">Restorations</Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/Services/RootCanals">Root Canals</Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/Services/Veneers">Veneers</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Link to="/Contact">
              <Nav.Link href="/Contact">Contact</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
