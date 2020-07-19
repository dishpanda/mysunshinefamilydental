import React from "react";
import { Carousel, Button } from "react-bootstrap";
import "../HomeCarousel/HomeCarousel.css";

export default (props) => {
  console.log("Rendering Home Carousel");

  return (
    <div className="carousel-container w-75 d-block">
      <Carousel interval="10000">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.squarespace-cdn.com/content/v1/5e28d1d9752be803fc520a9d/1583378848530-7DVXN62HS08H1TS3Z4VT/ke17ZwdGBToddI8pDm48kOsfPsfwz_5GLHyitAdgvmYUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dgtjcgy--ILNvUKp8yktQMuyeyyopepzMhqzdOLDs71_JvwGh1qtNWvMhYKnvaKhbA/Home-Lobby_2.jpg?format=2500w"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>Complete Dental Care</h3>
            <h1>You Can Trust</h1> */}
            <Button href="tel:9256009006">Call Today!</Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.squarespace-cdn.com/content/v1/5e28d1d9752be803fc520a9d/1583378643183-D00ITC3214Z0UVG76W64/ke17ZwdGBToddI8pDm48kOsfPsfwz_5GLHyitAdgvmYUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dgtjcgy--ILNvUKp8yktQMuyeyyopepzMhqzdOLDs71_JvwGh1qtNWvMhYKnvaKhbA/Home-Cosmetic-Dentistry.jpg?format=2500w"
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>Beautiful Natural Results</h3>
            <h1>For All Ages</h1>
            <Button href="tel:9253169800" variant="primary">
              Phone Number
            </Button>{" "}
          </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.squarespace-cdn.com/content/v1/5e28d1d9752be803fc520a9d/1583379189423-W65OW3KIH57P3Z25BL6I/ke17ZwdGBToddI8pDm48kOsfPsfwz_5GLHyitAdgvmYUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dgtjcgy--ILNvUKp8yktQMuyeyyopepzMhqzdOLDs71_JvwGh1qtNWvMhYKnvaKhbA/Home-Waiting-Room.jpg?format=2500w"
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>Have an</h3>
            <h1>Attractive Smile Today!</h1>
            <Button href="tel:9253169800" variant="primary">
              Phone Number
            </Button>{" "}
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
