import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

export default (props) => {
  console.log("Rendering 404");

  return (
    <Jumbotron fluid style={{height: "calc(100vh - 128px)"}}>
      <Container>
        <h1 className="text-muted">¯\_(ツ)_/¯</h1>
        <h2>Error 404</h2>
        <p>This page is not quite ready for you yet! Try again some other time.</p>
      </Container>
    </Jumbotron>
  );
};
