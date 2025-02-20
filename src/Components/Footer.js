import React from "react";

const Footer = () => {
  return (
    <footer>
    <div class="footer-content">
        <p>&copy; 2025 My Sitecore Diaries. All rights reserved.</p>
        <div class="resume-download">
            <p>Connect us :  &nbsp;</p>   
        </div>
        <div class="social-icons">
            <a href="https://www.youtube.com/mysitecorediaries" target="_blank"><img src="images/youtube-color-icon.png" alt="YouTube"></img></a>
            <a href="https://www.linkedin.com/in/mysitecorediaries" target="_blank"><img src="images/linkedin-app-icon.png" alt="LinkedIn"></img></a>
            <a href="https://www.instagram.com/mysitecorediaries" target="_blank"><img src="images/ig-instagram-icon.png" alt="Instagram"></img></a>
            <a href="https://www.facebook.com/mysitecorediaries" target="_blank"><img src="images/facebook-round-color-icon.png" alt="Facebook"></img></a>
        </div>
    </div>
</footer>
  );
};

export default Footer;