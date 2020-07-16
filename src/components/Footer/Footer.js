import React from "react";
import HomeCarousel from "../HomeCarousel/HomeCarousel"

export default (props) => {
  console.log("Rendering 404");

  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <div className="container">

      <HomeCarousel/>

      </div>
    </footer>
  );
};
