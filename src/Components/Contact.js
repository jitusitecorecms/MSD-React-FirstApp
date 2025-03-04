import React from "react";

const Contact = ({contactData}) => {

if (!contactData) return <p>Loading...</p>;

const { heading, list } = contactData;

  return (
            <section className="contact-section" id="contact">
                <h2>{heading}</h2>
                <div className="contact-section-content">
                {
                        list.map((point, index) => (
                        <div className="contact-block" key={point.id}>
                        <img src={point.image} alt={point.title}></img>
                        <p>{point.title}: <a href={point.link}>{point.title}</a></p>
                        </div>
                ))}
                </div>
            </section>

  );
};

export default Contact;