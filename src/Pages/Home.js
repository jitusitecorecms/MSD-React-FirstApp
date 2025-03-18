import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Aboutus from "../Components/Aboutus";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import HeroBanner from "../Components/HeroBanner";
import Services from "../Components/Services";
import Video from "../Components/Video";

const Home = ({ content }) => {
  return (
    <div>
    <HeroBanner heroBannerData={content.heroBanner} />
    <Aboutus aboutUsData={content.aboutUs} />
    <Services servicesData={content.services} />
    <Video videosData={content.videos} />
    <Contact contactData={content.contact} />
  </div>
  );
};

export default Home;
