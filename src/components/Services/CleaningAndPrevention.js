import React from "react";

import "./Services.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";

import chair from "../../images/chair.jpg"

export default (props) => {
  console.log("Rendering Cleaning and Prevention");

  return (
    <Container className="page-body">
      <h2 className="heading-custom-2">
        <FontAwesomeIcon icon={faTooth} /> Cleaning and Prevention
      </h2>
      <div className="flex-service-container">
        <div>
          <h4 className="heading-custom-4 text-muted">
            Dental cleaning is performed by one of our registered dental
            hygienists, followed by a thorough exam by Dr. Dogra.
          </h4>
          <p>
            The cleaning includes removal of plaque and tartar, inspection of
            gums, and a final polishing to buff out any stains that were not
            removed during your regular tooth brushing and flossing routine.
          </p>
          <p>
            If you have a history of oral health issues or a specific problem at
            the day of your visit, you may receive treatments beyond a typical
            dental cleaning.
          </p>
          <p>A typical dental cleaning includes:</p>
          <ul>
            <li>
              <strong>Removing plaque:</strong> Many people don’t know that
              plaque is actually a living colony of bacteria. It grows if it’s
              not removed, by feeding on food debris on the surface of your
              teeth. As it eats, it produces toxins that can inflame your gums,
              which is the cause of periodontal disease. Plaque is sticky and
              almost invisible, which makes it difficult or impossible to
              completely remove without a professional dental cleaning.
            </li>
            <li>
              <strong>Removing tartar:</strong> Tartar is located both above and
              below your gum lines and it can only be removed via professional
              dental instruments. Essentially, tartar is hardened plaque that’s
              been left on the tooth and has attached itself to the tooth.
            </li>
            <li>
              <strong>Polishing teeth:</strong> The final step is teeth
              polishing. During this step, your hygienist will use professional
              dental equipment to get rid of stains that wasn’t removed during
              your typical tooth brushing and flossing routine.
            </li>
          </ul>
        </div>
        <div>
            <img src={chair} alt="Dentist's chair"/>
        </div>
      </div>
    </Container>
  );
};
