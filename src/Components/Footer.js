import React from "react";
import ytImg from '../Images/youtube-color-icon.png'
import instaImg from '../Images/ig-instagram-icon.png'
import linkImg from '../Images/linkedin-app-icon.png'
import fbImg from '../Images/facebook-round-color-icon.png'

const Footer = () => {
  return (
          <footer>
            <div className="footer-content">
                <p>&copy; 2025 My Sitecore Diaries. All rights reserved.</p>
                <div className="resume-download">
                    <p>Connect us :  &nbsp;</p>   
                </div>
                <div className="social-icons">
                    <a href="https://www.youtube.com/mysitecorediaries" target="_blank"><img src={ytImg} alt="YouTube"></img></a>
                    <a href="https://www.linkedin.com/in/mysitecorediaries" target="_blank"><img src={linkImg} alt="LinkedIn"></img></a>
                    <a href="https://www.instagram.com/mysitecorediaries" target="_blank"><img src={instaImg} alt="Instagram"></img></a>
                    <a href="https://www.facebook.com/mysitecorediaries" target="_blank"><img src={fbImg} alt="Facebook"></img></a>
                </div>
            </div>
          </footer>
  );
};

export default Footer;