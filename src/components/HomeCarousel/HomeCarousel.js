import React from "react";
import { Carousel } from "react-bootstrap";
import "../HomeCarousel/HomeCarousel.css";

export default (props) => {
  console.log("Rendering Home Carousel");

  return (
    <Carousel interval="10000">
      <Carousel.Item className="image1">
        <Carousel.Caption>
          <h2 className="heading-custom-2">Bringing Happiness to Your Smile</h2>
          <h4>Call us at (925) 600-9006!</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="image2">
        <Carousel.Caption>
          <h2 className="heading-custom-2">Bringing Happiness to Your Smile</h2>
          <h4>Call us at (925) 600-9006!</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="image3">
        <Carousel.Caption>
          <h2 className="heading-custom-2">Bringing Happiness to Your Smile</h2>
          <h4>Call us at (925) 600-9006!</h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
