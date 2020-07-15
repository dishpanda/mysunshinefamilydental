import React, { Component } from "react";
import "./Main.css";

import { Route, Switch } from "react-router-dom";

import MeetTheDoctor from "../MeetTheDoctor/MeetTheDoctor";
import NavigationBar from "../NavigationBar/NavigationBar";
import HomeCarousel from "../HomeCarousel/HomeCarousel";
import FourZeroFour from "../FourZeroFour";

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
            render={() => <MeetTheDoctor />}
          />
          {/* <Route exact path="/mysunshinefamilydental/COVID-19" render={()=> <COVID19/> }/>
          <Route exact path="/mysunshinefamilydental/services" render={()=> <Services/> }/>
          <Route exact path="/mysunshinefamilydental/forms" render={()=> <Forms/> }/>
          <Route exact path="/mysunshinefamilydental/insurance" render={()=> <Insurance/> }/>
          <Route exact path="/mysunshinefamilydental/contact" render={()=> <Contact/> }/> */}
          <Route component={FourZeroFour}/>
        </Switch>

        <footer className="footer mt-auto py-3 bg-dark text-white">
          <div className="container">Place sticky footer content here.</div>
        </footer>
      </div>
    );
  }
}

export default Main;
