import React, { Component } from "react";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

class NavigationBar extends Component {
  render() {
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
                <small className="text-muted">Dr. Srutee Dogra, DDS</small>
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
              <Link to="/Services">
                <Nav.Link href="/Services">Services</Nav.Link>
              </Link>
              <Link to="/Forms">
                <Nav.Link href="/Forms">Forms</Nav.Link>
              </Link>
              <Link to="/Insurance">
                <Nav.Link href="/Insurance">Insurance</Nav.Link>
              </Link>
              <Link to="/Contact">
                <Nav.Link href="/Contact">Contact</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
