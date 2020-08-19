import React from "react";

import "./Services.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default (props) => {
  console.log("Rendering Extratctions");

  return (
    <Container className="page-body">
      <h2 className="heading-custom-2">
        <FontAwesomeIcon icon={faTooth} /> Extractions
      </h2>
      <h4 className="heading-custom-4  ">
        Tooth extractions are performed for a variety of reasons. The issue may
        be a painful wisdom tooth or a tooth that has been badly damaged by
        decay. In some cases, a tooth is removed to make space for dental
        prosthetics or braces.
      </h4>
      <h3 className="heading-custom-3  ">
        Reasons for Porcelain Veneers
      </h3>
      <div className="flex-container-50">
        <div>
          <ol>
            <h5 className="heading-custom-5  ">
              <li>A Crowded Mouth</li>
            </h5>
            <p>
              Sometimes dentists pull teeth to prepare the mouth for
              orthodontia. The goal of orthodontia is to properly align the
              teeth, which may not be possible if your teeth are too big for
              your mouth. Likewise, if a tooth cannot break through the gum
              (erupt) because there is not room in the mouth for it, your
              dentist may recommend pulling it.
            </p>

            <h5 className="heading-custom-5  ">
              <li>Infection</li>
            </h5>
            <p>
              If tooth decay or damage extends to the pulp – the center of the
              tooth containing nerves and blood vessels – bacteria in the mouth
              can enter the pulp, leading to infection. Often this can be
              corrected with{" "}
              <Link to="/Services/RootCanals">root canal therapy</Link>, but if
              the infection is so severe that antibiotics or root canal therapy
              do not cure it, extraction may be needed to prevent the spread of
              infection.
            </p>
            <h5 className="heading-custom-5  ">
              <li>Risk of Infection</li>
            </h5>
            <p>
              If your immune system is compromised (for example, if you are
              receiving chemotherapy or are having an organ transplant), even
              the risk of infection in a particular tooth may be reason enough
              to pull the tooth.
            </p>
            <h5 className="heading-custom-5  ">
              <li>Periodontal (Gum) Disease</li>
            </h5>
            <p>
              If periodontal disease – an infection of the tissues and bones
              that surround and support the teeth – have caused loosening of the
              teeth, it may be necessary to pull the tooth or teeth.
            </p>
          </ol>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/4269355/pexels-photo-4269355.jpeg"
            alt="Tools used in tooth extraction are laid out on a surgical towel."
          />
        </div>
      </div>
      <h3 className="heading-custom-3  ">
        What to Expect with Tooth Extraction
      </h3>
      <p>
        Before pulling the tooth, you will be given an injection of a local
        anesthetic to numb the area where the tooth will be removed.{" "}
      </p>
      <p>
        If the tooth is impacted, Dr. Dogra will cut away gum and bone tissue
        that cover the tooth and then, using forceps, grasp the tooth and gently
        rock it back and forth to loosen it from the jaw bone and ligaments that
        hold it in place. Sometimes, a hard-to-pull tooth must be removed in
        pieces.
      </p>
      <p>
        Once the tooth has been pulled, a blood clot usually forms in the
        socket. We will pack a gauze pad into the socket and have you bite down
        on it to help stop the bleeding. Sometimes Dr. Dogra will place a few
        stitches to close the gum edges over the extraction site.
      </p>
    </Container>
  );
};
