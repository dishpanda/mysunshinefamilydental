import React from "react";

import "./Services.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";

export default (props) => {
  console.log("Rendering Veneers");
  return (
    <Container className="page-body">
      <h2 className="heading-custom-2">
        <FontAwesomeIcon icon={faTooth} /> Veneers
      </h2>
      <div className="flex-service-container">
        <div>
          <h4 className="heading-custom-4 text-muted">
            Veneers are a great option to enhance your smile. Veneers are thin
            porcelain coverings over your teeth that will provide the desired
            shade and shape that generally requires little removal of tooth
            structure.
          </h4>
          <p>
            At Sunshine Family Dental, we specialize in porcelain veneers. Your
            teeth will be minimally prepared or shaped to allow room. These
            restorations provide a conservative way to restore your teeth.
          </p>
          <h5 className="heading-custom-5 text-muted">
            Reasons for Porcelain Veneers
          </h5>
          <ul data-rte-list="default">
            <li>
              <p>Cosmetically, to create a uniform, white, beautiful smile.</p>
            </li>
            <li>
              <p>Crooked teeth</p>
            </li>
            <li>
              <p>Misshapen teeth</p>
            </li>
            <li>
              <p>Severely discolored or stained teeth</p>
            </li>
            <li>
              <p>Teeth that are too small or large</p>
            </li>
            <li>
              <p>&nbsp;Unwanted or uneven spaces</p>
            </li>
            <li>
              <p>Worn or chipped teeth</p>
            </li>
          </ul>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/3845626/pexels-photo-3845626.jpeg"
            alt="Doctor fitting Porcelain Veneers on patient"
          />
        </div>
      </div>
      <h5 className="heading-custom-5 text-muted">
        What Does Getting Porcelain Veneers Involve?
      </h5>
      <div className="flex-container-50">
        <div>
          <p>
            Getting veneers usually requires two visits to complete the process,
            with little or no anesthesia required during the procedures. The
            teeth are prepared by lightly buffing and shaping the surface to
            allow for the thickness of the veneer. A mold or impression of the
            teeth is taken and a shade (color) will then be chosen by you and
            Dr. Dogra.
          </p>
        </div>
        <div>
          <p>
            On the second visit, the teeth will be cleansed with special liquids
            to achieve a durable bond. Bonding cement is then placed between the
            tooth and veneer and a special light beam is used to harden and set
            the bond.
          </p>
          <p>
            You will receive care instructions for veneers. Proper brushing,
            flossing and regular dental visits will aid in the life of your new
            veneer(s).
          </p>
        </div>
      </div>
    </Container>
  );
};
