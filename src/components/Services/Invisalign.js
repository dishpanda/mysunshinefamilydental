import React from "react";

import "./Services.css";
import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";

export default (props) => {
  console.log("Rendering Invisalign");

  return (
    <Container className="page-body">
      <h2 className="heading-custom-2">
        <FontAwesomeIcon icon={faTooth} /> Invisalign
      </h2>
      <h4 className="heading-custom-4">How Does Invisalign Work?</h4>
      <div className="flex-service-container">
        <div>
          <p>
            Invisalign&reg; clear aligners use the most advanced technology to
            give you your best smile yet. Using a series of aligners made with
            advances, such as proprietary SmartTrack&reg; material, Invisalign
            treatment can straighten your teeth with 75% more predictability.
            Plus, your smile is shaped more comfortably than with braces.
          </p>
          <p>
            The best part? Your lifestyle isn’t interrupted, meaning you can
            still enjoy the activities you love and the foods you can’t live
            without. All with no unexpected trips to the doctor due to broken
            wires or brackets.
          </p>
          <ul>
            <li>
              <p>
                With advances such as SmartTrack&reg; material your smile will
                be shaped with 75% more predictability.
              </p>
            </li>
            <li>
              <p>
                Aligners are trimmed along your gum line for optimal comfort and
                aesthetics.
              </p>
            </li>
            <li>
              <p>
                Easier to brush and floss as normal, for better oral health.
              </p>
            </li>
            <li>
              <p>
                More affordable than you may think: insurance may cover up to
                50% of treatment.
              </p>
            </li>
          </ul>
        </div>
        <div>
          <img
            src="https://www.nicepng.com/png/full/914-9143926_open-aligner-case-with-invisalign-aligners-1-10.png"
            alt="Tools used in tooth extraction are laid out on a surgical towel."
          />
        </div>
      </div>
      <div className="flex-thirds">
        <div>
          <div className="image-container-1"></div>
          <h5 className="heading-custom-5">The Treatment</h5>
          <p>
            We will complete a scan or impression. Together with our team of
            specialists, they’ll craft a complete digital treatment plan,
            mapping out you best smile yet from beginning to end.
          </p>
        </div>
        <div>
          <div className="image-container-2"></div>
          <h5 className="heading-custom-5">The Aligners</h5>
          <p>
            Invisalign clear aligners are designed to transform your smile up to
            2x faster and are made with unique advances, such as SmartTrack
            material. Each aligner throughout your treatment gradually and
            predictably moves your teeth as you continue to live your life the
            way you want.
          </p>
        </div>
        <div>
          <div className="image-container-3"></div>
          <h5 className="heading-custom-5">The Transformation</h5>
          <p>
            Throughout your treatment, you’ll see your smile transform,
            gradually revealing the person you’ve always imagined yourself to
            be. With the help of Invisalign clear aligners and your experienced
            doctor, you’ll discover how a series of small, expertly designed
            shifts can shape a whole new future.
          </p>
        </div>
      </div>
      <h4 className="heading-custom-4">Treatments Designed for You</h4>
      <p>
        Invisalign&reg; clear aligners can treat a wide range of teeth
        straightening conditions. Using the most advanced technology,
        Invisalign&reg; treatment corrects simple to complex cases.
      </p>
      <ul>
        <li>
          <p>Crossbite</p>
        </li>
        <li>
          <p>Crowding</p>
        </li>
        <li>
          <p>Gapped Teeth</p>
        </li>
        <li>
          <p>Open Bite</p>
        </li>
        <li>
          <p>Overbite</p>
        </li>
        <li>
          <p>Underbite</p>
        </li>
      </ul>
      <div className="text-center">
        <Button href="https://invisalign.com">Learn More</Button>
      </div>
    </Container>
  );
};
