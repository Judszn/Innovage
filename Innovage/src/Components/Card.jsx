import React from "react";
import Avatar from "../assets/avatar.jpeg";
import Props from "prop-types";

function Card(props) {
  return (
    <div className="item">
      <div className="image">
        <img src={Avatar} alt="" />
      </div>
      <h1>{props.name}</h1>
      <h3>{props.occupation}</h3>
      <div>{props.Interests}</div>
    </div>
  );
}

export default Card;
