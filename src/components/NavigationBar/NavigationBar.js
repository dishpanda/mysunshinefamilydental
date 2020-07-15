import React, { Component } from "react";
import logo from "../../logo.svg";

import { LinkContainer } from "react-router-bootstrap";
import { Route, Switch } from "react-router-dom";

import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

import MeetTheDoctor from "../MeetTheDoctor/MeetTheDoctor";

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="/mysunshinefamilydental">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
            Sunshine Family Dental
            <Container>
              <small class="text-muted">Dr. Srutee Dogra, DDS</small>
            </Container>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/mysunshinefamilydental">Home</Nav.Link>
              <Nav.Link href="/mysunshinefamilydental/COVID-19">
                COVID-19
              </Nav.Link>
              <Nav.Link href="/mysunshinefamilydental/services">
                Services
              </Nav.Link>
              <Nav.Link href="/mysunshinefamilydental/forms">Forms</Nav.Link>
              <Nav.Link href="/mysunshinefamilydental/insurance">
                Insurance
              </Nav.Link>
              <Nav.Link href="/mysunshinefamilydental/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
