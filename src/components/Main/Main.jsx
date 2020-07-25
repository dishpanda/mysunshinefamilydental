import React, { Component } from "react";
import "./Main.css";

import { Route, Switch } from "react-router-dom";

import NavigationBar from "../NavigationBar/NavigationBar";
import Home from "../Home/Home";
import COVID19 from "../COVID19/COVID19";
import Services from "../Services/Services";
import Forms from "../Forms/Forms";
import Insurance from "../Insurance/Insurance";
import Contact from "../Contact/Contact";
import FourZeroFour from "../FourZeroFour";
import Footer from "../Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

class Main extends Component {
  render() {
    return (
      <div class="full">
        <NavigationBar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/COVID-19">
            <COVID19 />
          </Route>
          <Route exact path="/Services">
            <Services />
          </Route>
          <Route exact path="/Forms">
            <Forms />
          </Route>
          <Route exact path="/Insurance">
            <Insurance />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
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
