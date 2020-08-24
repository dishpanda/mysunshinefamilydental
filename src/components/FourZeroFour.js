import React from "react";
import { Container, Jumbotron, Button } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";

export default (props) => {
  console.log("Rendering 404");

  return (
    <Jumbotron
      fluid
      style={{ height: "calc(100vh - 128px)", backgroundColor: "#fff" }}
    >
      <Container>
        <h1 className="text-muted">¯\_(ツ)_/¯</h1>
        <h2>Error 404</h2>
        <p>
          <code>{useLocation().pathname}</code> might not exist or it's just not
          ready for you yet. Try again some other time.
        </p>
        <Link to="/">
          <Button variant="primary" href="/">
            Go Back Home
          </Button>
        </Link>{" "}
        <Link to="/Contact">
          <Button variant="secondary" href="/Contact">
            Schedule an Appointment
          </Button>
        </Link>
      </Container>
    </Jumbotron>
  );
};
