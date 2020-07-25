import React from "react";
import { Container, Jumbotron, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default (props) => {
  console.log("Rendering 404");

  return (
    <Jumbotron
      fluid
      style={{ height: "calc(100vh - 128px)", backgroundColor: "#e9eff1" }}
    >
      <Container>
        <h1 className="text-muted">¯\_(ツ)_/¯</h1>
        <h2>Error 404</h2>
        <p>
          <code>{useLocation().pathname}</code> might not exist or it's just not ready for you yet.
          Try again some other time.
        </p>
        <p>
          <Button variant="primary" href="/mysunshinefamilydental/">
            Go Back Home
          </Button>
        </p>
      </Container>
    </Jumbotron>
  );
};
