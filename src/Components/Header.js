import React from "react";

const Header = () => {
  return (
    <header>
    <div class="logo">
        <img src="images/Logo.png" alt="Logo"></img>
    </div>
    <nav>
        <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#videos">Our Videos</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="images/JItendra J Ghanekar - Resume.pdf" download="Jitendra J Ghanekar - Resume.pdf" target="_blank">Download Resume</a></li>
        </ul>
    </nav>
</header>
  );
};

export default Header;