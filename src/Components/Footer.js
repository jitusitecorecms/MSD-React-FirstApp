import React from "react";

const Footer = ({ footerData }) => {
  if (!footerData) return <p>Loading...</p>;

  const { text, socialLinks } = footerData;

  return (
    <footer>
      <div className="footer-content">
        <p>{text}</p>
        <div className="resume-download">
          <p>Connect with us: &nbsp;</p>
        </div>
        <div className="social-icons">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
              <img src={social.icon} alt={social.platform} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
