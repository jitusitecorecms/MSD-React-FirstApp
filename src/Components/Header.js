import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const Header = ({ headerData }) => {
  if (!headerData) return <p>Loading...</p>;

  const { logo, navigation } = headerData;

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <ul>
          {navigation.map((navItem, index) => (
            <li key={index}>
              <Link
                to={navItem.href}
                {...(navItem.download && { download: true })}
                target={navItem.download ? "_blank" : "_self"}
                rel={navItem.download ? "noopener noreferrer" : undefined}
              >
                {navItem.label}
              </Link> 
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;


{/* <Link
                to={navItem.href}
                {...(navItem.download && { download: true })}
                target={navItem.download ? "_blank" : "_self"}
                rel={navItem.download ? "noopener noreferrer" : undefined}
              >
                {navItem.label}
              </Link> */}

