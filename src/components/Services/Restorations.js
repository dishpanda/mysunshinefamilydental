import React from "react";

import "./Services.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";

export default (props) => {
  console.log("Rendering Restorations");

  return (
    <Container className="page-body">
      <h2 className="heading-custom-2">
        <FontAwesomeIcon icon={faTooth} /> Restorations: Fillings and Crowns
      </h2>
      <h4 className="heading-custom-4 text-muted">
        It’s great news that the incidence of tooth decay has significantly
        diminished due to an increase in patient awareness. However, teeth are
        still susceptible to decay, infection, and breakage. Through improved
        techniques and modern technology, we are now able to offer more options
        for restoring a tooth back to its normal shape, appearance, and
        function.
      </h4>
      <div className="flex-service-container">
        <div>
          <p>
            Should your teeth ever require a restorative treatment, you can rest
            assured knowing we will always discuss the available options with
            you and recommend what we believe to be the most comfortable and
            least invasive treatment. Providing you with excellent care is our
            number one priority when restoring your beautiful smile.
          </p>
          <h5 className="heading-custom-5 text-muted">
            Reasons for Restorative Dentistry
          </h5>
          <ul>
            <li>
              <p>Enhance your smile</p>
            </li>
            <li>
              <p>Fill in unattractive spaces between teeth</p>
            </li>
            <li>
              <p>Improve or correct an improper bite</p>
            </li>
            <li>
              <p>Prevent the loss of a tooth</p>
            </li>
            <li>
              <p>Relieve dental pain</p>
            </li>
            <li>
              <p>Repair damaged and decayed teeth</p>
            </li>
            <li>
              <p>Replace missing teeth</p>
            </li>
            <li>
              <p>Replace old, unattractive dental treatments</p>
            </li>
            <li>
              <p>Restore normal eating and chewing</p>
            </li>
          </ul>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/3881449/pexels-photo-3881449.jpeg"
            alt="Dentist's chair"
          />
        </div>
      </div>
      <h4 className="heading-custom-4 text-muted">
        Porcelain Composite Fillings
      </h4>
      <h5 className="heading-custom-5 text-muted">
        At Sunshine Family Dental, we only use porcelain-composite fillings,
        also known as composite or white fillings. The material is a non-toxic
        and composed of porcelain and resins that matches the color of the
        tooth.
      </h5>
      <p>
        Composite fillings can be used in teeth that are under great chewing
        pressure such as molars and bicuspids, and now thanks to improved
        technologies such as directed shrinkage of the ceramic polymer material
        used to fill cavities, these composite fillings are reliable and are
        fast becoming the standard of care for forward-thinking dentists and
        cosmetic dentists.
      </p>
      <h5 className="heading-custom-5 text-muted">
        Why Choose Porcelain-Composite Fillings?
      </h5>
      <div className="flex-service-container">
        <div>
          <ol>
            <li>
              <strong>More Natural Appearance</strong>
              <p>
                The largest benefit of using porcelain ceramic fillings is the
                completely natural appearance of the repaired tooth. Many
                patients are so happy with the appearance of their treated teeth
                that they eventually have all their old fillings removed and
                replaced with ceramic fillings.
              </p>
            </li>
            <li>
              <strong>Durability and Longevity</strong>
              <p>
                Another strong advantage of porcelain-composite fillings is that
                the material is very durable, rugged and capable of lasting
                longer than amalgam fillings. On average, composite fillings
                last from 10 to 20 years, while amalgam fillings last from 5 to
                10 years.
              </p>
            </li>
          </ol>
        </div>
        <div>
          <ol start="3">
            <li>
              <strong>Less Toxic</strong>
              <p>
                Safety of materials is a positive focus when discussing ceramic
                fillings. Particularly with amalgam fillings and their mixture
                of silver and mercury, there is always the possible allergic
                reaction to one of the metals being used.
              </p>
            </li>
            <li>
              <strong>Improved Stain and Abrasion Resistance</strong>
              <p>
                Lastly, composite fillings are more resistant to stains and
                abrasions than conventional fillings, and do not run the risk of
                developing micro cracks and fissures as amalgam fillings do.
                These cracks and fissures in the fillings can lead to further
                decay within the sealed tooth where the cavity had existed.
              </p>
            </li>
          </ol>
        </div>
      </div>
      <h4 className="heading-custom-4 text-muted">
        Full Zirconia (Porcelain) Crowns
      </h4>
      <h5 className="heading-custom-5 text-muted">
        A crown is a covering that encases the entire tooth surface, restoring
        it to its original shape and size.
      </h5>
      <div className="flex-container-50">
        <div>
          <p>
            A crown is most commonly used to protect and strengthen a tooth
            structure that cannot be restored with fillings or other types of
            restorations. However, crowns can also be used to cap teeth for
            cosmetic reasons.
          </p>
          <p>
            Porcelain crowns are made to match the shape, size, and color or
            your teeth giving you a natural, long-lasting beautiful smile. They
            are highly durable and will last many years.
          </p>
          <img
            src="https://www.pinclipart.com/picdir/big/524-5245158_tooth-clipart-crown-royalty-free-library-porcelain-components.png"
            alt="Diagram of a crown fitting."
            style={{paddingTop:"2vh"}}
          />
        </div>
        <div>
          <h5 className="heading-custom-5 text-muted">Reasons for Crowns</h5>
          <ul>
            <li>
              <p> Broken or Fractured Teeth </p>
            </li>
            <li>
              <p>Cosmetic Enhancement</p>
            </li>
            <li>
              <p>Decayed Teeth</p>
            </li>
            <li>
              <p>Fractured Fillings</p>
            </li>
            <li>
              <p>Large Fillings</p>
            </li>
            <li>
              <p>Final Phase of Root Canal Therapy</p>
            </li>
          </ul>
          <h5 className="heading-custom-5 text-muted">
            What Does Getting a Crown Involve?
          </h5>
          <p>
            Getting porcelain crowns usually requires two appointments. Your
            first appointment will include taking several highly accurate
            impressions or iTero digital scans that will be used to create your
            custom crown. If you are getting your crown for cosmetic reasons,
            the dentist can adjust the mold slightly to ensure that the finished
            crown will look better than your original tooth. This mold will also
            be used to create a temporary crown, which will stay on your tooth
            for approximately two weeks until your new crown has been fabricated
            by a dental laboratory.
          </p>
          <p>
            At your second appointment, your temporary crown will be removed,
            the tooth will be cleaned, and your new crown will be carefully
            cemented to ensure the spacing and bite is accurate.
          </p>
        </div>
      </div>
    </Container>
  );
};
