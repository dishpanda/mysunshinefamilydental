import React from "react";

import "./Services.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";

export default (props) => {
  console.log("Rendering Root Canals");

  return (
    <Container className="page-body">
      <h2 className="heading-custom-2">
        <FontAwesomeIcon icon={faTooth} /> Root Canals
      </h2>
      <h4 className="heading-custom-4">
        Root canal treatment is needed when the nerve of a tooth is affected by
        decay or infection. In order to save the tooth, all the living tissue
        inside the tooth, including pulp and nerves, is removed and the
        resulting space is filled with special medicated dental materials called
        guttapercha. A crown is then placed over the top to restore the tooth to
        its full function.
      </h4>
      <div className="flex-service-container">
        <div>
          <h5 className="heading-custom-5">Root Canal Treatment</h5>
          <p>
            Having a root canal done on a tooth is the treatment of choice to
            save a tooth that otherwise would die and have to be removed. Many
            patients believe that removing a tooth that has problems is a good
            solution, but extracting a tooth may ultimately be more costly and
            can cause problems for adjacent teeth.
          </p>
          <h5 className="heading-custom-5">
            What Does Root Canal Treatment Involve?
          </h5>
          <p>
            To start your endodontics treatment and care at our practice, we’ll
            take digital X-rays of your teeth and jaw to search your mouth to
            pinpoint exactly where the trouble spot is. Once you’re in the
            chair, we’ll numb the immediate area and isolate the tooth that
            we’re going to work on. In order to access the affected tooth
            structure, we’ll make a small access hole in the tooth. Through this
            hole, we will remove any damaged or infected pulp from the canals in
            the tooth’s root – that’s where the name “root canal” comes from!
            We’ll take another set of X-rays to ensure that all the affected
            tissue has been removed before filling the canals with a medication
            to kill any remaining bacteria. Finally, we’ll place a filling in
            the tooth to keep bacteria out. We often recommend that patients
            also get a dental crown placed on top of the tooth to give it extra
            strength and protection.
          </p>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/3779708/pexels-photo-3779708.jpeg"
            alt="Dentist performing an oral procedure."
          />
          <h5 className="heading-custom-5">Reasons for Root Canal Therapy</h5>
          <ul>
            <li>
              <p>An abscess (or pimple) on the gums</p>
            </li>
            <li>
              <p>Sensitivity to hot and cold</p>
            </li>
            <li>
              <p>Severe toothache pain</p>
            </li>
            <li>
              <p>Swelling and/or tenderness</p>
            </li>
            <li>
              <p>Sometimes no symptoms are present</p>
            </li>
            <li>
              <p>
                Decay has reached the tooth pulp (the living tissue inside the
                tooth)
              </p>
            </li>
            <li>
              <p>
                &nbsp;Infection or abscess have developed inside the tooth or at
                the root tip
              </p>
            </li>
            <li>
              <p>Injury or trauma to the tooth</p>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};
