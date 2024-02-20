import React from "react";
import Logo from "./Logo";
import SearchBar from "../SearchBar.jsx";
import IconButton from "../IconButton";
import MainLinks from "../MainLinks/index.jsx";

import "./index.css";
import NavigationLinks from "../NavigationLinks/index.jsx";

const Navigation = () => {
  const links = [
    {
      text: "Explore",
      special: false,
    },
    {
      text: "Advertise",
      special: false,
    },
    {
      text: "Unsplash+",
      special: true,
    },
  ];

  return (
    <div>
      <nav>
        <Logo />
        <div className="divider"></div>
        <SearchBar />
        <div className="divider"></div>
        <MainLinks links={links} />
        <div className="dividerContainer">
          <div className="divider3"></div>
        </div>
        <div className="login_submit_container">
          <a href="/login" className="loginButton">
            Log in
          </a>
          <button type="button" className="submitButton">
            Submit a photo
          </button>
        </div>
        <div className="divider"></div>
        <IconButton icon="Hamburger" className="buttonContainer" />
      </nav>
      <NavigationLinks />
    </div>
  );
};

export default Navigation;
