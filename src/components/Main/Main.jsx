import React, { Component } from "react";
import "./Main.css";

import { Route, Switch } from "react-router-dom";

import NavigationBar from "../NavigationBar/NavigationBar";
import HomeCarousel from "../HomeCarousel/HomeCarousel";
import COVID19 from "../COVID19/COVID19";
import Services from "../Services/Services";
import Forms from "../Forms/Forms";
import Insurance from "../Insurance/Insurance";
import Contact from "../Contact/Contact"
import FourZeroFour from "../FourZeroFour";
import Footer from "../Footer/Footer"

import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Main extends Component {
  render() {
    return (
      <div>
        <NavigationBar />

        <Switch>
        <Route
            exact
            path="/"
            render={() => (
              <div>
                <HomeCarousel className="page-body"/>
                <div className="body">
                  <Container>
                    <h1>Welcome to Sunshine Family Dental.</h1>
                    <hr />
                  </Container>
                </div>
              </div>
            )}
          />
          <Route
            exact
            path="/mysunshinefamilydental/"
            render={() => (
              <div>
                <HomeCarousel/>
                <div className="body">
                  <Container>
                    <h1>Welcome to Sunshine Family Dental.</h1>
                    <hr />
                  </Container>
                </div>
              </div>
            )}
          />
          <Route
            exact
            path="/mysunshinefamilydental/MeetTheDoctor"
            render={() => <div></div>}
          />
          <Route exact path="/mysunshinefamilydental/COVID-19" render={()=> <COVID19/> }/>
          <Route exact path="/mysunshinefamilydental/services" render={()=> <Services/> }/>
          <Route exact path="/mysunshinefamilydental/forms" render={()=> <Forms/> }/>
          <Route exact path="/mysunshinefamilydental/insurance" render={()=> <Insurance/> }/>
          <Route exact path="/mysunshinefamilydental/contact" render={()=> <Contact/> }/>
          <Route component={FourZeroFour}/>
        </Switch>

            <Footer/>
      </div>
    );
  }
}

export default Main;
