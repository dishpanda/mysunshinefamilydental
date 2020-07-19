import React from "react";
import { Container } from "react-bootstrap";
import "./COVID19.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDisease } from "@fortawesome/free-solid-svg-icons";

export default (props) => {
  console.log("Rendering COVID-19");

  return (
    <Container className="page-body">
      <h2 className="heading-custom-2">
        <FontAwesomeIcon icon={faDisease}/>{" "}
        COVID-19 Update
      </h2>

      <h4 className="heading-custom-4">
        We have authorization from the Alameda County Health Department to
        reopen our office under new safety guidelines. We have always practiced
        universal precautions as outlined by CDC and OSHA standards of infection
        control. Currently, we are taking additional measures to further protect
        our patients and employees with the following protocols:
      </h4>
      <h5 className="text-muted heading-custom-5">
        <ul>
          <li>
            In compliance with the recommendations for public health, anyone
            with a cough or fever will not be allowed into our practice and
            should stay at home. In this situation, we will be happy to
            reschedule the appointment for a later date (not subject to a
            cancellation fee).
          </li>
          <li>
            Upon entering Sunshine Family Dental, we request that all patients
            wear a mask and only remove it at the time of commencing the dental
            procedure.
          </li>
          <li>
            In compliance with CDC guidelines, we are required to take patients’
            temperature and fill in a patient screening form (if it wasn’t
            completed in a text message confirmation prior to the appointment).
          </li>
          <li>
            At the beginning of an appointment, we will ask our patient to rinse
            with a dilute solution of 1% hydrogen peroxide, as recommended by
            the American Dental Association (ADA).
          </li>
          <li>
            We will have hand sanitizers available in our waiting room and every
            treatment room, so that all patients can sanitize their hands when
            entering our practice.
          </li>
          <li>
            For an extra layer of safety, we have acquired FDA approved air
            purifiers, manufactured by Molekule. These purifiers break down
            pollutants in the air at a molecular level, including VOCs,
            bacteria, mold, viruses and allergens.
          </li>
          <li>
            Social distancing will be practiced and we will therefore limit the
            number of patients in our office. Only scheduled patients will be
            allowed inside the practice unless a person is a guardian of a
            minor. Caretakers of elderly patients will be allowed inside to drop
            off a patient, but we ask that caretakers wait outside the building
            or in their vehicle until the patient’s appointment is completed.
          </li>
        </ul>
      </h5>
    </Container>
  );
};
