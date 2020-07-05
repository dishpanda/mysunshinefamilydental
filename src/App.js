import React from "react";
import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Carousel,
  Button,
} from "react-bootstrap";

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
                  drop="right"
                >
                  <NavDropdown.Item href="#"> Item </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Cosmetic Dentistry"
                  id="collasible-nav-dropdown"
                  drop="right"
                >
                  <NavDropdown.Item href="#"> Item </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Periodontal Disease"
                  id="collasible-nav-dropdown"
                  drop="right"
                >
                  <NavDropdown.Item href="#"> Item </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Restorations"
                  id="collasible-nav-dropdown"
                  drop="right"
                >
                  <NavDropdown.Item href="#"> Item </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Pediatric Dentistry"
                  id="collasible-nav-dropdown"
                  drop="right"
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
      <Container>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Complete Dental Care</h3>
              <h1>You Can Trust</h1>
              <Button href="tel:9253169800">Phone Number</Button>{" "}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1551741568-53a19562313c"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Beautiful Natural Results</h3>
              <h1>For All Ages</h1>
              <Button href="tel:9253169800" variant="primary">
                Phone Number
              </Button>{" "}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1544507888-56d73eb6046e"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Have an</h3>
              <h1>Attractive Smile Today!</h1>
              <Button href="tel:9253169800" variant="primary">
                Phone Number
              </Button>{" "}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      <div className="body">
        <Container>
          <h1>Welcome to Sunshine Family Dental.</h1>
          <hr />
        </Container>
      </div>

      <footer className="footer mt-auto py-3 bg-dark text-white">
        <div className="container">Place sticky footer content here.</div>
      </footer>
    </div>
  );
}

export default App;
