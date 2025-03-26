import React from "react";

const Contact = ({ contactData }) => {
  if (!contactData) return <p>Loading...</p>;

  const { heading, list } = contactData;

  const handleClick = () => {
    alert("Thank you for reaching out!");
  };

  const handleSyntheticClick = (event) => {
    event.preventDefault(); // Just for demonstration, not needed for a button
    alert(`Synthetic Event Triggered!\nEvent Type: ${event.type}`);
  };


  const handleClickWithArgument = (event, message) => {
    event.preventDefault(); // Demonstrates event handling
    alert(`Synthetic Event Triggered!\nMessage: ${message}\nEvent Type: ${event.type}`);
  };

  return (
    <section className="contact-section" id="contact">
      <h2>{heading}</h2>
      <div className="contact-section-content">
        {list.map((point, index) => (
          <div className="contact-block" key={point.id}>
            <img src={point.image} alt={point.title}></img>
            <p>
              {point.title}: <a href={point.link}>{point.title}</a>
            </p>
          </div>
        ))}
      </div>
      {/* Button added after the loop */}
      <div>
      <button onClick={handleClick}>Click Me (Basic Event)</button>
      </div>
      <br></br>
      <div>
      <button onClick={handleSyntheticClick}>Click Me (Synthetic Event)</button>
      </div>
      <br></br>
      <div>
      <button onClick={(event) => handleClickWithArgument(event, "Thank you for reaching out!")}>
        Click Me (Synthetic Event - Passing Arguments)
      </button>
      </div>
    </section>
  );
};

export default Contact;
