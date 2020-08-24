import React from "react";

import "./Services.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";

export default (props) => {
  console.log("Rendering Dentures");

  return (
    <Container className="page-body">
      <h2 className="heading-custom-2">
        <FontAwesomeIcon icon={faTooth} /> Dentures
      </h2>
      <h4 className="heading-custom-4  ">
        A standard denture is a removable dental appliance that replaces missing
        teeth and surrounding tissue. Dentures are made to closely resemble your
        natural teeth and may even enhance your smile.
      </h4>
      <div className="flex-container-50">
        <div>
          <p>
            Dentures are removable appliances that can replace missing teeth and
            help restore your smile. If you’ve lost all of your natural teeth,
            whether from gum disease, tooth decay or injury, replacing missing
            teeth will benefit your appearance and your health. That’s because
            dentures make it easier to eat and speak better than you could
            without teeth—things that people often take for granted.
          </p>
          <p>
            There are two types of dentures: complete dentures and partial
            dentures. <em>Complete dentures</em> are used when all of the teeth
            are missing, while <em>partial dentures</em> are used when some
            natural teeth remain. A partial denture fills in the spaces created
            by missing teeth, providing a new chewing surface and preventing
            other teeth from shifting.
          </p>
          <p>
            A complete denture may be either <em>conventional</em> or
            <em> immediate</em>. The conventional type is made after the teeth
            have been removed and the gum tissue has healed, which usually takes
            4 to 6 weeks. During this time the patient will go without teeth.
            Immediate dentures are made in advance and immediately placed after
            the teeth are removed, thus preventing the patient from having to be
            without teeth during the healing process. Once the tissues shrink
            and heal, adjustments will have to be made to the immediate denture.
          </p>
          <p>
            Dentures are very durable appliances and will last many years.
            However, they may have to be relined, remade, repaired, or
            readjusted due to normal wear.
          </p>
        </div>
        <div>
          <img
            src="https://media.istockphoto.com/photos/the-dentist-is-holding-dentures-in-his-hands-dental-prosthesis-in-the-picture-id1177914966?k=6&m=1177914966&s=612x612&w=0&h=TXxUxWnNAp74oDQa_XFTTwkiOZNSR18-lB3gVa1c27g="
            alt="Dentist holding dentures in their hand."
          />
          <h4 className="heading-custom-4  ">Reasons for Dentures</h4>
          <ul>
            <li>
              <p>Complete Denture to replace all teeth in an arch</p>
            </li>
            <li>
              <p>Partial Denture to replace several teeth in an arch</p>
            </li>
            <li>
              <p>Avoid sunken or aged-looking facial tissues</p>
            </li>
            <li>
              <p>Improve chewing, speech, and confidence</p>
            </li>
          </ul>
        </div>
      </div>
      <h4 className="heading-custom-4  ">
        What Does Getting Dentures Involve?
      </h4>
      <div className="flex-container-50">
        <div>
          <p>
            The process of getting dentures requires several appointments,
            usually over several weeks. Highly accurate impressions and
            measurements are taken and used to create your custom denture.
            Several “try-in” appointments may be necessary to ensure proper
            shape, color, and fit. At the final appointment, Dr. Russo will
            precisely adjust and place the completed denture, ensuring a natural
            and comfortable fit.
          </p>
        </div>
        <div>
          It is normal to experience increased saliva flow, some soreness, and
          possible speech and chewing difficulty when your partial or complete
          denture is first placed. However, this will subside as your muscles
          and tissues get used to the new dentures.You will be given care
          instructions for your new dentures. Proper cleaning of your new dental
          appliance, good oral hygiene, and regular dental visits will aid in
          extending the life of your new dentures.
        </div>
      </div>
    </Container>
  );
};
