import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

export default (props) => {
  console.log("Rendering Footer");

  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <Container>
        <div className="flex-container-6040">
          <div className="flex-div-60">
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
                <br />
                Some of the images used on this website are royalty free,
                collected from various sources, including but not limited to{" "}
                <a href="https://unsplash.com/">Unsplash</a> and{" "}
                <a href="https://pexels.com">Pexels</a>.
              </small>
            </p>
          </div>
          <div className="flex-div-40">
            <h3>About Our Practice</h3>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/COVID-19">COVID-19</Link>
              </li>
              <li>
                <Link to="/Services/Overview"> Services </Link>
              </li>
              <li>
                <Link to="/Forms"> Forms </Link>
              </li>
              <li>
                <Link to="/Insurance"> Insurance </Link>
              </li>
              <li>
                <Link to="/Contact"> Contact </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};
