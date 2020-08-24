import React from "react";

import "./Services.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";

export default (props) => {
  console.log("Rendering Implants");

  return (
    <Container className="page-body">
      <h2 className="heading-custom-2">
        <FontAwesomeIcon icon={faTooth} /> Implants
      </h2>
      <div className="flex-service-container">
        <div>
          <h4 className="heading-custom-4">
            Implant dentistry is the most advanced therapy available for
            replacing missing teeth. Dental implant restorations generally look,
            feel, and act like natural teeth. A dental bridge is a fixed
            (non-removable) appliance designed to replace missing teeth.
          </h4>
          <p>
            Patients who have been treated with implants are able to chew all
            the foods they desire. They can also correct gaps in their smile and
            are an alternative to appliances such as dentures or bridges.
          </p>
          <h5 className="heading-custom-5">How Do Implants Work?</h5>
          <p>
            Implants are designed to fuse into the jawbone in place of the
            missing teeth to provide stable support for artificial teeth.
            Restorations such as dentures and dental crowns would be allowed to
            mount over it. Stable and grounded implants cause no shifting or
            slippage of restorations. Dental implants can bring you on the road
            to recovering from your lost set of teeth to feel more natural and
            energetic.
          </p>
          <h5 className="heading-custom-5">
            What is the Procedure to Get Implants?
          </h5>
          <p>
            There are several advantages of dental implants as they help
            patients restore their natural ability to chew, talk, and speak.
            Listed below are some of the many advantages of dental implants:
          </p>

          <strong> Improved appearance </strong>
          <p>
            Dental implants allow you to look and feel as though you never had
            missing teeth. As these implants are designed to fuse with the
            jawbone, they will in time become permanent.
          </p>

          <strong> Improved Speech </strong>
          <p>
            Implant-supported restorations are a great way to ensure that teeth
            don’t slip or fall off.
          </p>
          <strong> Comfort </strong>
          <p>
            Implants help eliminate any signs of discomfort as they gradually
            become a part of your oral cavity.
          </p>
          <strong> Improved self-esteem </strong>
          <p>
            Implants help restore your self-esteem and bring back the confidence
            to smile like before.
          </p>
          <strong> Great Oral Health </strong>
          <p>
            Dental implants can help assure good oral health improving long-term
            oral health.
          </p>
          <br />
          <p>
            Dental implants have a really good success rate. With proper oral
            hygiene and care, your implants can last over a lifetime.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1525893277997-207c04d47d65"
            alt="One of the most expensive dental treatments available in dentistry today. Four dental implants are used to secure a dental bridge of 12 teeth to restore the function and aesthetics of your teeth. "
          />
          <h5 className="heading-custom-5">Reasons for Dental Implants</h5>
          <ul>
            <li>
              <p>Replace missing teeth</p>
            </li>
            <li>
              <p>
                Eliminate the need for dentures or support existing dentures
              </p>
            </li>
            <li>
              <p>Prevent bone loss that occurs after a tooth is lost</p>
            </li>
            <li>
              <p>Prevent the shaving down of healthy teeth for a bridge</p>
            </li>
            <li>
              <p>Provide patients with the confidence of real teeth</p>
            </li>
            <li>
              <p>Allow patients to eat all the foods they enjoy</p>
            </li>
          </ul>
          <h5 className="heading-custom-5">
            What is the Procedure to Get Implants?
          </h5>
          <p>
            Getting dental implants would involve a series of steps. Any broken
            or decayed teeth that need removal would be removed by an extraction
            procedure. In place of the missing teeth, the dentist would place
            the Titanium implant into the bone socket where the tooth is
            missing. Healing of the implant would take place in a period of six
            to twelve weeks. Once integrated with the bone, a restoration in the
            form of a crown is attached to the abutment.
          </p>
        </div>
      </div>
      <h5 className="heading-custom-5">
        Are You a Candidate for Dental Implants?{" "}
      </h5>
      <p>
        You might be a candidate for dental implants if all of the following
        apply to you:
      </p>
      <ul>
        <li>
          <p>You are in good general health.</p>
        </li>
        <li>
          <p>You have healthy gums.</p>
        </li>
        <li>
          <p>You are not suffering from excessive bone loss.</p>
        </li>
        <li>
          <p>You are over 15 years old.</p>
        </li>
        <li>
          <p>
            You have a missing tooth or teeth and you want to eat, speak, and
            chew normally.
          </p>
        </li>
      </ul>
    </Container>
  );
};
