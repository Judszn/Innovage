import React from "react";
import Jumbotron from "../assets/Jumbotron.jpg";

function Hero() {
  return (
    <div className="jumbotron h-screen gap-0 w-screen mt-[50px] overflow-hidden">
      <div className="h-full bg-white w-[20%] relative"></div>

      <div className="w-[80%]">
        <img
          src={Jumbotron}
          alt="two techies listen to music"
          className="h-full"
        />
      </div>
      <div className="absolute w-[40%] top-20% bg-black h-[80%] ml-[5vh] mt-[5vh] opacity-[0.8] justify-start m-auto p-20">
        <div className="text-pink-600 text-lg">
          News . Events . Research . Entertainment
        </div>

        <div className="text-4xl font-extrabold text-white w-[85%]  border-w p-5 mt-[5vh]">
          <hr className=" w-[30%] mb-5" /> QUALITY CONTENT AT THE CLICK OF A
          BUTTON
        </div>
        <div></div>
      </div>

      <div className=""></div>
      <div className="invisible">
        <div className="Header"></div>
      </div>
    </div>
  );
}

export default Hero;
