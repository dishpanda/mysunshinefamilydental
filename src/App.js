import React from "react";
import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav, NavDropdown, Carousel } from "react-bootstrap";

function App() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />{" "}
          Sunshine Family Dental
          <Container>
            <small class="text-muted">Dr. Sruthee Dogra, DDS</small>
          </Container>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Welcome</Nav.Link>
            <NavDropdown title="About Us" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">Meet The Doctor</NavDropdown.Item>
              <NavDropdown.Item href="#">Meet The Team</NavDropdown.Item>
              <NavDropdown.Item href="#">Office</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              href="services"
              title="Services"
              id="collasible-nav-dropdown"
            >
              <Container>
                <NavDropdown
                  title="Cleanings and Prevention"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="#"> Item </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Cosmetic Dentistry"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="#"> Item </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Periodontal Disease"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="#"> Item </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Restorations" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#"> Item </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Pediatric Dentistry"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="#"> Item </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Item href="#"> Invisalign &reg; </NavDropdown.Item>
                <NavDropdown.Item href="#"> Endodontics </NavDropdown.Item>
              </Container>
            </NavDropdown>
            <NavDropdown title="Patient Info" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#"> Office Forms </NavDropdown.Item>
              <NavDropdown.Item href="#"> Financing </NavDropdown.Item>
              <NavDropdown.Item href="#"> Dental Videos </NavDropdown.Item>
              <NavDropdown.Item href="#"> FAQs </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/"> Appointment Request </Nav.Link>
            <Nav.Link href="/">Contact</Nav.Link>
            <Nav.Link href="/">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default App;
