import React from "react";
import { Carousel, Button } from "react-bootstrap";
import "../HomeCarousel/HomeCarousel.css";

export default (props) => {
  console.log("Rendering Home Carousel");

  return (
    <Carousel interval="10000">
      <Carousel.Item className="image1">
        <Carousel.Caption>
          <p className="heading-custom-2">
            Creating The Smile You Were Meant To Have
          </p>
          <Button href="tel:9256009006">Call Today!</Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="image2">
        <Carousel.Caption>
          <p className="heading-custom-2">
            Creating The Smile You Were Meant To Have
          </p>
          <Button href="tel:9256009006">Call Today!</Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="image3">
        <Carousel.Caption>
          <p className="heading-custom-2">
            Creating The Smile You Were Meant To Have
          </p>
          <Button href="tel:9256009006">Call Today!</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
