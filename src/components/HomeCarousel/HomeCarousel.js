import React from "react";
import { Carousel, Button } from "react-bootstrap";
import "../HomeCarousel/HomeCarousel.css"

export default (props) => {
  console.log("Rendering Home Carousel");

  return (
    <div className="carousel-container">
      <Carousel interval="10000">
        <Carousel.Item>
          <img
            className="d-block"
            src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Complete Dental Care</h3>
            <h1>You Can Trust</h1>
            <Button href="tel:9253169800">Phone Number</Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1551741568-53a19562313c"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Beautiful Natural Results</h3>
            <h1>For All Ages</h1>
            <Button href="tel:9253169800" variant="primary">
              Phone Number
            </Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1544507888-56d73eb6046e"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Have an</h3>
            <h1>Attractive Smile Today!</h1>
            <Button href="tel:9253169800" variant="primary">
              Phone Number
            </Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
