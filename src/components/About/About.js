import React from "react";

import "./About.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";

import drDogra from "../../images/dr-dogra.jpg";
import carina from "../../images/CarinaPena.jpeg";
import laura from "../../images/LauraDiaz.JPG";

export default (props) => {
  console.log("Rendering About");

  return (
    <Container className="page-body">
      <h2 className="heading-custom-2">
        <FontAwesomeIcon icon={faTooth} /> About Us
      </h2>
      <h4 className="heading-custom-4">
        Sunshine Dental Care is proud to serve the East Bay Area and surrounding
        region with top-of-the-line dental care.
      </h4>
      <div className="flex-container-50" style={{ alignItems: "center" }}>
        <div>
          <h3>Dr. Shrutee Dogra</h3>
          <p>
            Dr. Dogra graduated from UCSF in 2010 and has been practicing in the
            Bay Area since. She believes in listening to her patients needs and
            then coming up with a plan together, whether they desire to improve
            their smile or just maintain a healthy mouth. She wishes to build
            long term relationships with her patients while treating every one
            of them like family. Her patients are drawn to her efficient,
            friendly, encouraging approach and gentle care. Her professional
            affiliations include Alameda Dental Society, California Dental
            Association, American Dental Association. She keeps up with the
            latest in dentistry by taking up advanced courses and enjoys
            learning something new everyday. Outside of dentistry, she enjoys
            yoga, meditation, cooking, reading, travelling and spending time
            with her family.
          </p>
        </div>
        <div>
          <img
            src={drDogra}
            alt="Dr. Dogra."
          />
          <p className="">
            <em>Dr. Dogra</em>
          </p>
        </div>
      </div>

      <div className="flex-container-alt">
        <div>
          <h3>Carina Pena</h3>
          <p>
            Carina received her Registered Dental Assisting education from
            Carrington College of California in 2011. Through the years she has
            had great opportunities to expand her knowledge in different aspects
            of the dental field such as Orthodontics, Endodontics and Cosmetics.
            Carina’s compassionate personality helps patients feel relaxed and
            comfortable while getting their dental treatment. She enjoys
            educating them on their dental needs and seeing the smile on their
            face when they leave our office. She stays up to date in new
            techniques each year by taking continuing education courses. Carina
            is bilingual and has been a great addition to helping our spanish
            speaking patients. Carina enjoys spending time with her family and
            being outdoors on her time off.
          </p>
        </div>
        <div>
          <img
            src={carina}
            alt="Carina Pena."
          />
          <p className="">
            <em>Carina Pena</em>
          </p>
        </div>
      </div>
      <div className="flex-container-50" style={{ alignItems: "center" }}>
        <div>
          <h3>Laura Diaz</h3>
          <p>
            Laura has over 7 years of experience in the dental field. She
            started in dentistry in 2013 as a dental assistant after graduating
            from the Regional Occupation Program, and did her transition to
            front desk 3 years ago. Her primary purpose is assisting patients
            with scheduling and the handling of their insurance. She is fluent
            in both English and Spanish.
          </p>
        </div>
        <div>
          <img
            src={laura}
            alt="Laura Diaz."
          />
          <p>
            <em>Laura Diaz</em>
          </p>
        </div>
      </div>
    </Container>
  );
};
