import React from "react";

const Aboutus = ({ aboutUsData }) => {
  if (!aboutUsData) return <p>Loading...</p>;

  return (
    <section className="description" id="about">
      <h1>{aboutUsData.title}</h1>
      <div className="description">
        <p>{aboutUsData.introduction}</p>
        <ul>
          {aboutUsData.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Aboutus;



