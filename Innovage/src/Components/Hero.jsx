import React from "react";
import Video from "../assets/bg.mp4";

function Home() {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={Video} autoPlay loop muted plays-inline className="w-full" />
      <div className="heading ">
        <h1 className="dm-serif-text-regular">Innovage</h1>
      </div>

      {/* <div className="section">
        <p>
          vibrant online platform that connects, inspires, and <br />
          empowers impact founders worldwide
        </p>
      </div> */}
      <div className="subtext">
        <p>
          vibrant online platform that connects, inspires, and <br />
          empowers impact founders worldwide
        </p>
      </div>
      <div className="gradientback"></div>
    </div>
  );
}

export default Home;
