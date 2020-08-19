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
              src="https://brand.deltadental.com/content/dam/ddpa/us/en/logo/DD_signature_bounding_RGB.jpg"
              alt="Delta Dental"
            />
          </a>
        </div>
        <div>
          <a href="https://aetna.com">
            <img
              className="insurance-logo"
              src="https://www.aetna.com/content/dam/aetna/images/logos/Aetna_Logo_ss_Violet_RGB_Coated.svg"
              alt="Aetna"
            />
          </a>
        </div>
        <div>
          <a href="https://cigna.com">
            <img
              className="insurance-logo"
              src="https://i.imgur.com/XT4SRqO.png"
              alt="Cigna"
            />
          </a>
        </div>
        <div>
          <a href="https://metlife.com">
            <img
              className="insurance-logo"
              src="https://i.imgur.com/34oGsSI.png"
              alt="MetLife"
            />
          </a>
        </div>
        <div>
          <a href="https://www.blueshieldca.com/">
            <img
              className="insurance-logo"
              src="https://i.imgur.com/kY2Lt1u.png"
              alt="Blue Shield of California"
            />
          </a>
        </div>
        <div>
          <a href="https://carecredit.com">
            <img
              className="insurance-logo"
              src="https://www.logolynx.com/images/logolynx/c2/c2de58d4869beea845aa7f88df2770c0.png"
              alt="CareCredit"
            />
          </a>
        </div>
      </div>
    </Container>
  );
};
