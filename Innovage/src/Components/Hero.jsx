import React from "react";
import Video from "../assets/bg.mp4";

function Home() {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video
        src={Video}
        autoPlay
        loop
        muted
        plays-inline
        className="w-screen"
      />
      <div className="heading ">
        <h1 className="dm-serif-text-regular text-pink-600">Innovage</h1>
      </div>

      {/* <div className="section">
        <p>
          vibrant online platform that connects, inspires, and <br />
          empowers impact founders worldwide
        </p>
      </div> */}
      <div className="subtext border-t-2">
        <p>
          vibrant online platform that connects, inspires, and <br />
          empowers impact founders
          <span className="text-pink-600 text-2xl font-bold pl-2">
            worldwide
          </span>
        </p>
      </div>
      <div className="gradientback"></div>
    </div>
  );
}

export default Home;
