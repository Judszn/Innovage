import React from "react";
import Jumbotron from "../assets/Jumbotron.jpg";

function Hero() {
  return (
    <div className="jumbotron">
      <img src={Jumbotron} alt="two techies listen to music" />

      <div className=""></div>
      <div className="invisible">
        <div className="Header"></div>
      </div>
    </div>
  );
}

export default Hero;
