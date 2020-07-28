import React from "react";

import RegistrationForm from "./d/RegistrationForm.pdf";
import NewPatientForm from "./d/NewPatientForm.pdf";
import "./Forms.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNotesMedical } from "@fortawesome/free-solid-svg-icons";

export default (props) => {
  console.log("Rendering Forms");

  return (
    <Container className="page-body">
      <h2 className="heading-custom-2">
        <FontAwesomeIcon icon={faNotesMedical} /> Forms
      </h2>
      <h4 className="heading-custom-4">
        Click on a form below to open and download.
      </h4>
      <h5 className="text-muted heading-custom-5">
        <ul>
          <li>
            <a href={RegistrationForm} rel="noopener noreferrer">
              Registration Form
            </a>
          </li>
          <li>
            <a href={NewPatientForm} rel="noopener noreferrer">
              New Patient Form
            </a>
          </li>
        </ul>
      </h5>
    </Container>
  );
};
