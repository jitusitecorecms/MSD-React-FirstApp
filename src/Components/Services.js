import React from "react";

const Services = ({ servicesData }) => {  
  if (!servicesData || !servicesData.list) return <p>Loading...</p>;

  const { heading, list } = servicesData;

  return (
    <section className="services-section" id="services">
      <h2>{heading}</h2>
      <div className="services-section-content">
        { list.map((point) => (
          <div className="service-item" key={point.id}>
            <h3>{point.title}</h3>
            <div className="service-block">
              <img src={point.image} alt={point.title} />
              <div>
                <p>{point.description}</p> 
                <a href={point.link}>{point.linkText}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
