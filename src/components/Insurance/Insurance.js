import React from "react";
import "./Insurance.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";

export default (props) => {
  console.log("Rendering Insurance");

  return (
    <Container className="page-body">
      <h2 className="heading-custom-2">
        <FontAwesomeIcon icon={faFileInvoiceDollar} /> Insurances We Accept
      </h2>
      <h3 className="heading-custom-3">
        We accept most insurances and PPO Plans. If you don’t see your PPO plan
        listed here, please call our office for more information. We work with
        Delta Dental, Aetna, Anthem, Ameritas, Blue Cross, Blue Shield of
        California, Cigna, Guardian, Humana, Metlife, Principal and many more.
      </h3>
      <div className="flex-insurance-container">
        <div>
          <a href="https://deltadental.com">
            <img
              className="insurance-logo"
              src="https://brand.deltadental.com/content/dam/ddpa/us/en/icons/DD_signature_unbounded_RGB.png"
              alt="Logo of Delta Dental"
            />
          </a>
        </div>
        <div>
          <a href="https://aetna.com">
            <img
              className="insurance-logo"
              src="https://www.aetna.com/content/dam/aetna/images/logos/Aetna_Logo_ss_Violet_RGB_Coated.svg"
              alt="Logo of Aetna"
            />
          </a>
        </div>
        <div>
          <a href="https://cigna.com">
            <img
              className="insurance-logo"
              src="https://i.imgur.com/XT4SRqO.png"
              alt="Logo of Cigna"
            />
          </a>
        </div>
        <div>
          <a href="https://metlife.com">
            <img
              className="insurance-logo"
              src="https://i.imgur.com/34oGsSI.png"
              alt="Logo of MetLife"
            />
          </a>
        </div>
        <div></div>
        <div>
          <a href="https://www.blueshieldca.com/">
            <img
              className="insurance-logo"
              src="https://i.imgur.com/kY2Lt1u.png"
              alt="Logo of Blue Shield of California"
            />
          </a>
        </div>
      </div>
    </Container>
  );
};
