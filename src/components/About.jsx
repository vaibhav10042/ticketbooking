import React from "react";
import Top from "./Top";
import flight from "./img/flightbg.jpg";
const About = () => {
  return (
    <>
      <Top></Top>
      <div style={{ backgroundImage: `url(${flight})` }}></div>
    </>
  );
};

export default About;
