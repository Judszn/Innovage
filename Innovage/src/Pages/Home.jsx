import React from "react";

import Hero from "../Components/Hero.jsx";
import Navigation from "../Components/Navigation.jsx";
import Marquee from "../Components/Marquee.jsx";
import Featured from "../Components/Featured.jsx";
// import Grid from "../Components/Grid.jsx";
import Footer from "../Components/Footer.jsx";

function home() {
  return (
    <>
      <Hero className="mb-[10vh]" />
      {/* <Navigation className="mb-[10vh]" /> */}

      <Featured className="mb-[10vh]" />
      <Marquee className="mb-[10vh]" />
      <Footer />
    </>
  );
}

export default home;
