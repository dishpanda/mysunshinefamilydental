import React, { Component } from "react";

import "./Main.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

import NavigationBar from "../NavigationBar/NavigationBar";
import Home from "../Home/Home";
import COVID19 from "../COVID19/COVID19";
import About from "../About/About";
import ApptButton from "../ApptButton/ApptButton";
import Services from "../Services/Services";
import Forms from "../Forms/Forms";
import Insurance from "../Insurance/Insurance";
import Contact from "../Contact/Contact";
import FourZeroFour from "../FourZeroFour";
import Footer from "../Footer/Footer";
import CleaningAndPrevention from "../Services/CleaningAndPrevention";
import Restorations from "../Services/Restorations";
import Veneers from "../Services/Veneers";
import Implants from "../Services/Implants";
import RootCanals from "../Services/RootCanals";
import Extractions from "../Services/Extractions";
import Invisalign from "../Services/Invisalign";
import Dentures from "../Services/Dentures";

const TITLE =
  "Sunshine Family Dental | Dr. Sruthee Dogra, DDS | Pleasanton, CA";

class Main extends Component {
  render() {
    return (
      <div className="full">
        <NavigationBar />

        <Switch>
          <Route exact path="/">
            <Helmet>
              <title>{"Home | " + TITLE}</title>
            </Helmet>
            <Home />
          </Route>
          <Route exact path="/COVID-19">
            <Helmet>
              <title>{"COVID-19 Update | " + TITLE}</title>
            </Helmet>
            <COVID19 />
          </Route>
          <Route exact path="/About">
            <Helmet>
              <title>{"About | " + TITLE}</title>
            </Helmet>
            <About />
          </Route>
          <Route exact path="/Services/Overview">
            <Helmet>
              <title>{"Services Overview | " + TITLE}</title>
            </Helmet>
            <Services />
          </Route>
          <Route exact path="/Forms">
            <Helmet>
              <title>{"Forms | " + TITLE}</title>
            </Helmet>
            <Forms />
          </Route>
          <Route exact path="/Insurance">
            <Helmet>
              <title>{"Insurance | " + TITLE}</title>
            </Helmet>
            <Insurance />
          </Route>
          <Route exact path="/Contact">
            <Helmet>
              <title>{"Contact | " + TITLE}</title>
            </Helmet>
            <Contact />
          </Route>
          <Route exact path="/Services/CleaningAndPrevention">
            <Helmet>
              <title>{"Cleaning and Prevention | " + TITLE}</title>
            </Helmet>
            <CleaningAndPrevention />
          </Route>
          <Route exact path="/Services/Restorations">
            <Helmet>
              <title>{"Restorations | " + TITLE}</title>
            </Helmet>
            <Restorations />
          </Route>
          <Route exact path="/Services/Veneers">
            <Helmet>
              <title>{"Veneers | " + TITLE}</title>
            </Helmet>
            <Veneers />
          </Route>
          <Route exact path="/Services/Implants">
            <Helmet>
              <title>{"Implants and Crowns | " + TITLE}</title>
            </Helmet>
            <Implants />
          </Route>
          <Route exact path="/Services/RootCanals">
            <Helmet>
              <title>{"Root Canals | " + TITLE}</title>
            </Helmet>
            <RootCanals />
          </Route>
          <Route exact path="/Services/Extractions">
            <Helmet>
              <title>{"Extractions | " + TITLE}</title>
            </Helmet>
            <Extractions />
          </Route>
          <Route exact path="/Services/Invisalign">
            <Helmet>
              <title>{"Invisalign | " + TITLE}</title>
            </Helmet>
            <Invisalign />
          </Route>
          <Route exact path="/Services/Dentures">
            <Helmet>
              <title>{"Dentures | " + TITLE}</title>
            </Helmet>
            <Dentures />
          </Route>
          <Route path="*">
            <Helmet>
              <title>{"404 Error: Page Not Found | " + TITLE}</title>
            </Helmet>
            <FourZeroFour />
          </Route>
        </Switch>
        <ApptButton />
        <Footer />
      </div>
    );
  }
}

export default Main;
