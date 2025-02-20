import React from "react";
import Header from "./Components/Header";
import Aboutus from "./Components/Aboutus";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import HeroBanner from "./Components/HeroBanner";
import Services from "./Components/Services";
import Video from "./Components/Video";
import  "./App.css";

function App() {
  return (
    <div className="App">
     <Header />
     <HeroBanner />
      <Aboutus />
    <Services />
      <Video />
     <Contact />
     <Footer /> 

    </div>
  );
}

export default App;
