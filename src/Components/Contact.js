import React from "react";

const Contact = () => {
  return (
    <section class="contact-section" id="contact">
    <h2>Contact Us</h2>
    <div class="contact-section-content">
        <div class="contact-block">
            <img src="images/envelope-icon.png" alt="Email"></img>
            <p>Email: <a href="mailto:your-email@example.com">your-email@example.com</a></p>
        </div>
        <div class="contact-block">
            <img src="images/linkedin-app-icon.png" alt="LinkedIn"></img>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/mysitecorediaries" target="_blank">My LinkedIn Profile</a></p>
        </div>
        <div class="contact-block">
            <img src="images/resume-cv-icon.png" alt="Download Resume"></img>
            <p><a href="images/JItendra J Ghanekar - Resume.pdf" download="Jitendra_Ghanekar_Resume.pdf">Download Resume</a></p>
        </div>
    </div>
</section>

  );
};

export default Contact;