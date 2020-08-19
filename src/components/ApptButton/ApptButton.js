import React from "react";
import { Button, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "./ApptButton.css";

export default (props) => {
  console.log("Rendering Appointment Button");

  return (
    <Container className="page-body">
      <LinkContainer to="/Contact">
        <div className="button-container">
          <Button className="appt-button">
            Call us at (925) 600-9006 to set up an Appointment!
          </Button>
        </div>
      </LinkContainer>
    </Container>
  );
};
