import React from "react";

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
              <a
                href={navItem.href}
                {...(navItem.download && { download: true })}
                target={navItem.download ? "_blank" : "_self"}
                rel={navItem.download ? "noopener noreferrer" : undefined}
              >
                {navItem.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
