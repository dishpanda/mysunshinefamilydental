import React from "react";
import { Container, InputGroup, FormControl, Button } from "react-bootstrap";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

export default (props) => {
  console.log("Rendering Contact");

  return (
    <div className="page-body">
      <Container>
        <h2 className="heading-custom-2">
          <FontAwesomeIcon icon={faAddressCard} /> Contact Us
        </h2>

        <div className="flex-container">
          <div id="contact-left">
            <Container>
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.416777179193!2d-121.87483458468554!3d37.662913479780045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fe9a4908c46ed%3A0x141d56304d2c69c5!2s173%20Spring%20St%20%23110%2C%20Pleasanton%2C%20CA%2094566!5e0!3m2!1sen!2sus!4v1595116593980!5m2!1sen!2sus"
                scrolling="no"
                className="contact-map"
              ></iframe>
            </Container>
          </div>
          <div id="contact-right">
            <Container>
              <h3>Shoot us an email if you have any questions!</h3>
              <h5>
                Schedule an appointment by calling us at <a>9253169800</a>
              </h5>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="First Name"
                  aria-label="First Name"
                  aria-describedby="basic-addon1"
                />
                <FormControl
                  placeholder="Last Name"
                  aria-label="Last Name"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Your Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text> Your Message</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="textarea" aria-label="With textarea" />
              </InputGroup>
              <div className="my-3">
                <Button type="submit">Submit form</Button>
              </div>
            </Container>
          </div>
        </div>
      </Container>
    </div>
  );
};
