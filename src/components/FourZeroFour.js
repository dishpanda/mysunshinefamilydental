import React from "react";
import {Container} from "react-bootstrap";

export default (props) => {
  console.log('Rendering 404');

  return (
    <Container>
      <h1>This page is not yet ready for you. Try again later!</h1>
    </Container>
  );
};