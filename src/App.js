import React from "react";
import Header from "./Components/Header";
import Aboutus from "./Components/Aboutus";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import HeroBanner from "./Components/HeroBanner";
import Services from "./Components/Services";
import Video from "./Components/Video";
import "./App.css";
import content from "./Data/homepage.json"; // Ensure this path is correct

const App = () => {
  return (
    <div className="App">
      <Header headerData={content.header} />
      <HeroBanner heroBannerData={content.heroBanner} />
      <Aboutus aboutUsData={content.aboutUs} />
      <Services servicesData ={content.services} />
      <Video videosData={content.videos} />
      <Contact contactData={content.contact} />
      <Footer footerData={content.footer} />
    </div>
  );
};

export default App;
