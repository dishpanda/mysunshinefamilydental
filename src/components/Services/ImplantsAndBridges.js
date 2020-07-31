import React from "react";

import "./Services.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";

export default (props) => {
  console.log("Rendering Implants & Bridges");

  return (
    <Container className="page-body">
      <h2 className="heading-custom-2">
        <FontAwesomeIcon icon={faTooth} /> Implants & Bridges
      </h2>
      <div className="flex-service-container">
        <div>
          <h4 className="heading-custom-4 text-muted">
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
          <h5 className="heading-custom-5 text-muted">
            What Are Dental Implants?
          </h5>
          <p>
            Dental implants are the best alternative to natural teeth, because
            they replace both the root and the body of the tooth. An implant
            consists of two parts: a titanium steel screw that is surgically
            implanted into the bone, and a porcelain crown which sits on top of
            the screw and effectively replaces the tooth. If you are missing
            multiple teeth, you don’t necessarily have to get one screw
            implanted for every tooth. Instead, you can replace multiple teeth
            with just a couple of screws using implant-supported partial or
            complete dentures.
          </p>
          <p>
            Dental implants have been used successful for more than 30 years.
            The development stage of dental implantology ended more than two
            decades ago, and research studies have clearly established the
            safety and effectiveness of dental implants.
          </p>
          <h5 className="heading-custom-5 text-muted">
            Why Dental Implants Are Superior to Bridges
          </h5>
          <p>
            Dental implants are superior to bridges for several reasons. Besides
            the fact that a bridge can’t address bone loss, a bridge may also
            lead to problems with surrounding teeth. In a situation where a
            tooth is lost and the adjacent teeth are shaved down for a
            conventional bridge, the teeth that have been shaved down now have
            to take more force because the false tooth has no supporting root.
            Over time, this extra stress can cause problems in the abutment
            teeth. In a study done on the average longevity of three-tooth
            bridges, it was found that one out of every four bridges were lost
            after 15 years. The failure rate increases with four-tooth bridges.
            Typically, when a bridge fails, one or both of the abutment teeth
            are also lost. Of course, had the missing teeth been replaced with
            an implant, the neighboring teeth would not have been adversely
            affected.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1525893277997-207c04d47d65"
            alt="This is a snapshot of one of the most expensive dental treatments available in dentistry today. Four dental implants are used to secure a dental bridge of 12 teeth to restore the function and aesthetics of your teeth. "
          />
          <h5 className="heading-custom-5 text-muted">
            Reasons for Dental Implants
          </h5>
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
          <h5 className="heading-custom-5 text-muted">
            Why Choose Dental Implants?
          </h5>
          <p>
            Dental Implants offer numerous benefits over other treatments for
            replacing missing teeth.
          </p>
          <p>
            First of all, dental implants are the only treatment that actually
            arrest bone loss in the jaw. When a tooth’s root is lost, a process
            of bone resorption starts to occur immediately because the bone in
            the area no longer has any stimulation. When we place a dental
            implant, the bone actually bonds with the titanium through the
            process of osseointegration. Once this happens, there is no more
            danger of bone loss or deformation.
          </p>
          <p>
            Dental implants are also more comfortable than most other treatments
            for missing teeth. They are definitely more comfortable than
            dentures, which may slip, click, cause sores, or even fall out if
            patients aren’t careful. Dentures get more uncomfortable as patients
            age, because changes in the underlying bone make the dentures stop
            fitting properly and patients must either get a new set or live with
            the discomfort. Dental implants, on the other hand, truly are a
            permanent solution that will always deliver superior comfort and
            performance.
          </p>
        </div>
      </div>
      <h5 className="heading-custom-5 text-muted">
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
      <p>
        Some people think that dental implants are out of their price range,
        this is not necessarily the case. Visit{" "}
        <a href="https://carecredit.com/">CareCredit</a> to discuss financing
        options available and determine if dental implants are right for you.
      </p>
    </Container>
  );
};
