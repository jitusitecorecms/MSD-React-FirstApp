import React from "react";
import homeImg from '../Images/Home page.png'

const HeroBanner = () => {
  return (
          <a href="https://www.youtube.com/mysitecorediaries" target="_blank">
            <div className="hero-banner">
                <img src={homeImg} alt="Hero Banner" style={{width: "100%"}}></img>
            </div>
          </a>
  );
};

export default HeroBanner;
