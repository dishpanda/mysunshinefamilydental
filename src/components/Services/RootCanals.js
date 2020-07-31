import React from "react";
import { Link } from "react-router-dom";

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
      <h4 className="heading-custom-4 text-muted">
        Root canal therapy is needed when the nerve of a tooth is affected by
        decay or infection. In order to save the tooth, all the living tissue
        inside the tooth, including pulp and nerves, is removed and the
        resulting space is filled with special medicated dental materials called
        guttapercha. A crown is then placed over the top to restore the tooth to
        its full function.{" "}
      </h4>
      <div className="flex-service-container">
        <div>
          <h5 className="heading-custom-5 text-muted">Root Canal Therapy</h5>
          <p>
            Having a root canal done on a tooth is the treatment of choice to
            save a tooth that otherwise would die and have to be removed. Many
            patients believe that removing a tooth that has problems is a good
            solution, but extracting a tooth may ultimately be more costly and
            can cause problems for adjacent teeth.
          </p>
          <h5 className="heading-custom-5 text-muted">
            What Does Root Canal Therapy Involve?
          </h5>
          <p>
            A root canal procedure requires one or more appointments and can be
            performed by a dentist or endodontist (a root canal specialist).
          </p>
          <p>
            While the tooth is numb, a sheet of rubber will be placed around the
            tooth to keep it dry and free of saliva. An access opening is made
            on top of the tooth and a series of root canal files are placed into
            the opening, one at a time, removing the pulp, nerve tissue, and
            infected material. If tooth decay is present, it will also be
            removed with special dental instruments.
          </p>
          <p>
            Next, the tooth is thoroughly cleaned to remove all bacteria. Then,
            the roots and the inside cavity of the tooth will be filled and
            sealed with guttapercha. Additionally, a fiber post will be placed
            in one of the roots for added strength. After that, a filling will
            be placed to cover the opening on top of the tooth. In addition, all
            teeth that have root canal treatment should have a{" "}
            <Link to="/Services/Restorations">crown</Link> placed. This will
            protect the tooth, prevent it from breaking, and restore it to its
            full function.
          </p>
          <p>
            After treatment, your tooth may still be sensitive, but this will
            subside as the inflammation diminishes and the tooth heals. You will
            be given care instructions after each appointment. Good oral hygiene
            practices and regular dental visits will aid in extending the life
            of your root canal treatment and preventing reinfection.
          </p>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/3779708/pexels-photo-3779708.jpeg"
            alt="Dentist performing an oral procedure."
          />
          <h5 className="heading-custom-5 text-muted">
            Reasons for Root Canal Therapy
          </h5>
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
