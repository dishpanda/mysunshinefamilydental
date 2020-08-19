import React from "react";

import RegistrationForm from "./d/RegistrationForm.pdf";
import HealthInformationForm from "./d/HealthInformationForm.pdf";
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
      <h4 className="heading-custom-4">Welcome to Sunshine Family Dental! </h4>
      <h4>
        Please fill up the forms and we look forward to meeting with you in the
        office. Please call our office at{" "}
        <a href="9256009006">(925)&nbsp;600-9006</a> for any questions and to
        make an appointment.
        <br /> <br />
        Click on a form below to open and download.
      </h4>
      <h5 className="heading-custom-5">
        <ul>
          <li>
            <a href={RegistrationForm} rel="noopener noreferrer">
              Registration Form
            </a>
          </li>
          <li>
            <a href={HealthInformationForm} rel="noopener noreferrer">
              Health Information Form
            </a>
          </li>
        </ul>
      </h5>
    </Container>
  );
};
