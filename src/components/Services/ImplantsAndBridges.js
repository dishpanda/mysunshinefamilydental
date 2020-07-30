import React from "react";

import "./Services.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";

export default (props) => {
  console.log("Rendering Implants & Bridges");

  return (
    <Container className="page-body">
      <h2 className="heading-custom-2">
        <FontAwesomeIcon icon={faTooth} /> Implants & Bridges
      </h2>
      <div className="flex-service-container">
        <div></div>
        <div></div>
      </div>
    </Container>
  );
};
