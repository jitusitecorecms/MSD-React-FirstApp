import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AppRoutes from "./routes"; // ✅ Import the separate routes file
import "./App.css";

const App = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from API
    fetch("http://localhost:5000/content")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setContent(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading... App.JS</p>;
  if (error) return <p>Error: {error}</p>;
  if (!content) return <p>No data available</p>;

  return (
      <div className="App">
        <Header headerData={content.header} />
        <main>
          <AppRoutes content={content} /> {/* ✅ Use the separate routes component */}
        </main>
        <Footer footerData={content.footer} />
      </div>
  );
};

export default App;


// npm install -g json-server
// json-server --watch db.json --port 5000

{/* <HeroBanner heroBannerData={content.heroBanner} />
      <Aboutus aboutUsData={content.aboutUs} />
      <Services servicesData={content.services} />
      <Video videosData={content.videos} />
      <Contact contactData={content.contact} /> */}

