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
        <FontAwesomeIcon icon={faDisease} /> COVID-19 Update
      </h2>
      <h4 className="heading-custom-4">
        We are open and here for you! <br />
      </h4>
      <h4>
        We hope you and your families have remained safe during these trying
        times. As always, our primary concern is your health and safety!
      </h4>
      <br />
      <h4>
        If you had an appointment during the Shelter-in-Place, our staff will be
        reaching out to you to reschedule. If you would like to get in sooner,
        please call <a href="9256009006">(925) 600-9006</a>.
      </h4>
      <h4>
        We have always practiced universal precautions as outlined by CDC and
        OSHA standards of infection control. Currently, we are taking additional
        measures to further protect our patients and employees with the
        following protocols:
      </h4>
      <h5 className="heading-custom-5">
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
            In compliance with CDC guidelines, we are required to take the
            patient's temperature and fill in a patient screening form.
          </li>
          <li>
            We will have hand sanitizers available in our waiting room and every
            treatment room. We request all patients to use hand sanitizer upon
            entering and exiting the office.
          </li>
          <li>
            At the beginning of an appointment, we will ask our patient to rinse
            with a dilute solution of 1% hydrogen peroxide, as recommended by
            the American Dental Association (ADA).
          </li>
          <li>
            For an extra layer of safety, we have acquired FDA approved air
            purifiers with true HEPA filters that filters 99.97% of particles as
            small as 0.3 microns and captures particles we can’t see like
            viruses, bacteria, mold and allergens
          </li>
          <li>
            Social distancing will be practiced and we will therefore limit the
            number of patients in our office. Only scheduled patients will be
            allowed inside the practice unless a person is a guardian of a
            minor.
          </li>
        </ul>
        <p>Again, we are grateful for you and we are here for you!</p>
      </h5>
    </Container>
  );
};
