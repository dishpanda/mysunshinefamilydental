import React, { Component } from "react";
import "./Main.css";

import { Route, Switch } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import MeetTheDoctor from "../MeetTheDoctor/MeetTheDoctor";
import NavigationBar from "../NavigationBar/NavigationBar";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Carousel, Button } from "react-bootstrap";

class Main extends Component {
  render() {
    return (
      <div>
        <NavigationBar />

        <Switch>
          <Route
            exact
            path="/mysunshinefamilydental/"
            render={() => (
              <div>
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
              </div>
            )}
          />
        </Switch>

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
}

export default Main;
