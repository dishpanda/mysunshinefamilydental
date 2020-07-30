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
import CleaningAndPrevention from "../Services/CleaningAndPrevention";
import Restorations from "../Services/Restorations";
import Veneers from "../Services/Veneers";
import ImplantsAndBridges from "../Services/ImplantsAndBridges";
import RootCanals from "../Services/RootCanals";
import Extractions from "../Services/Extractions";
import Invisalign from "../Services/Invisalign";
import Dentures from "../Services/Dentures";

class Main extends Component {
  render() {
    return (
      <div className="full">
        <NavigationBar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/COVID-19">
            <COVID19 />
          </Route>
          <Route exact path="/Services/Overview">
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
          <Route exact path="/Services/CleaningAndPrevention">
            <CleaningAndPrevention />
          </Route>
          <Route exact path="/Services/Restorations">
            <Restorations />
          </Route>
          <Route exact path="/Services/Veneers">
            <Veneers />
          </Route>
          <Route exact path="/Services/ImplantsAndBridges">
            <ImplantsAndBridges />
          </Route>
          <Route exact path="/Services/RootCanals">
            <RootCanals />
          </Route>
          <Route exact path="/Services/Extractions">
            <Extractions />
          </Route>
          <Route exact path="/Services/Invisalign">
            <Invisalign />
          </Route>
          <Route exact path="/Services/Dentures">
            <Dentures />
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
