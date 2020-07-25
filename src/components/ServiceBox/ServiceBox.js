import React from "react";
import "./ServiceBox.css"

export default (props) => {
  console.log("Rendering ServiceBox");

  return (
    <div className="service">
      <h5>{props.name}</h5>
      <p>{props.body}</p>
    </div>
  );
};
