import React, { Component } from "react";
import "./Main.css";

import { Route, Switch } from "react-router-dom";

import NavigationBar from "../NavigationBar/NavigationBar";
import HomeCarousel from "../HomeCarousel/HomeCarousel";
import COVID19 from "../COVID19/COVID19";
import Services from "../Services/Services";
import Forms from "../Forms/Forms";
import Insurance from "../Insurance/Insurance";
import Contact from "../Contact/Contact";
import FourZeroFour from "../FourZeroFour";
import Footer from "../Footer/Footer";

import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Main extends Component {
  render() {
    return (
      <div class="full">
        <NavigationBar />

        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <div className="my-5" >
                  <HomeCarousel/>
                </div>
                <div className="body">
                  <Container>
                    <h1>Welcome to Sunshine Family Dental.</h1>
                    <hr />
                  </Container>
                </div>
              </div>
            )}
          />
          <Route exact path="/COVID-19">
            <COVID19 />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/mysunshinefamilydental/forms">
            <Forms />
          </Route>
          <Route exact path="/mysunshinefamilydental/insurance">
            <Insurance />
          </Route>
          <Route
            exact
            path="/mysunshinefamilydental/contact"
            render={() => <Contact />}
          />
          <Route path="*">
            <FourZeroFour />
          </Route>
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default Main;
