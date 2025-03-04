
import React from "react";

const HeroBanner = ({ heroBannerData }) => {
  if (!heroBannerData) return <p>Loading...</p>;

  const { image, link } = heroBannerData;


  return (

          <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="hero-banner">
            <img src={image.src} alt={image.alt} style={{ width: "100%" }} />
          </div>
          </a>
        );
};

export default HeroBanner;
