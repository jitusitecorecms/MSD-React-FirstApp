import React from "react";
import emailImg from '../Images/envelope-icon.png'
import linkedinImg from '../Images/linkedin-app-icon.png';
import resumeImg from '../Images/resume-cv-icon.png';

const Contact = () => {
  return (
            <section className="contact-section" id="contact">
                <h2>Contact Us</h2>
                <div className="contact-section-content">
                    <div className="contact-block">
                        <img src={emailImg} alt="Email"></img>
                        <p>Email: <a href="mailto:your-email@example.com">your-email@example.com</a></p>
                    </div>
                    <div className="contact-block">
                        <img src={linkedinImg} alt="LinkedIn"></img>
                        <p>LinkedIn: <a href="https://www.linkedin.com/in/mysitecorediaries" target="_blank">My LinkedIn Profile</a></p>
                    </div>
                    <div className="contact-block">
                        <img src={resumeImg} alt="Download Resume"></img>
                        <p><a href="images/JItendra J Ghanekar - Resume.pdf" download="Jitendra_Ghanekar_Resume.pdf">Download Resume</a></p>
                    </div>
                </div>
            </section>

  );
};

export default Contact;