import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";
import HomeCarousel from "../HomeCarousel/HomeCarousel";
import ServiceBoxContainer from "../ServiceBoxContainer/ServiceBoxContainer";

export default (props) => {
  console.log("Rendering Homepage");

  return (
    <div>
      <div className="my-5">
        <HomeCarousel />
      </div>
      <div className="body">
        <Container>
          <h2 className="heading-custom-2"> Services and Procedures </h2>
          <ServiceBoxContainer />
        </Container>
      </div>
    </div>
  );
};
