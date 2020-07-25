import React from "react";
import { Link } from "react-router-dom";
import ServiceBox from "../ServiceBox/ServiceBox";
import ServiceBoxContainer from "../ServiceBoxContainer/ServiceBoxContainer";
import "./Services.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";

export default (props) => {
  console.log("Rendering Services");

  return (
    <Container className="page-body">
      <h2 className="heading-custom-2">
        <FontAwesomeIcon icon={faTooth} /> Services and Procedures
      </h2>
      <ServiceBoxContainer />
    </Container>
  );
};
