import React from "react";
import { Container } from "react-bootstrap";
import {Link} from "react-router-dom";
import "./Footer.css";

export default (props) => {
  console.log("Rendering Footer");

  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <Container>
        <div className="flex-container">
          <div>
            <h3>Sunshine Family Dental</h3>
            <h5>Dr. Srutee Dogra, DDS</h5>
            <p>
              173 Spring St #110
              <br />
              Pleasanton, CA 94566
              <br />
              Tel 925&middot;600&middot;9006 • Fax 925&middot;600&middot;9006
            </p>
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.416777179193!2d-121.87483458468554!3d37.662913479780045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fe9a4908c46ed%3A0x141d56304d2c69c5!2s173%20Spring%20St%20%23110%2C%20Pleasanton%2C%20CA%2094566!5e0!3m2!1sen!2sus!4v1595116593980!5m2!1sen!2sus"
              scrolling="no"
              className="map"
            ></iframe>
            <p>
              <small>
                &copy; {new Date().getFullYear()} Sunshine Family Dental, a
                Dental Company <br />
                Website built and designed by{" "}
                <a href="https://dishpanda.github.io/">Rahul Deshpande</a>
              </small>
            </p>
          </div>
          <div>
            <h3>About Our Practice</h3>
            <ul class="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/COVID-19">
                  COVID-19
                </Link>
              </li>
              <li>
                <a href="/mysunshinefamilydental/Services"> Services </a>
              </li>
              <li>
                <a href="/mysunshinefamilydental/Forms"> Forms </a>
              </li>
              <li>
                <a href="/mysunshinefamilydental/Insurance"> Insurance </a>
              </li>
              <li>
                <a href="/mysunshinefamilydental/Contact"> Contact </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};
