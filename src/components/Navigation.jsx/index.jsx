import React from "react";
import Logo from "./Logo";
import SearchBar from "../SearchBar.jsx";
import IconButton from "../IconButton";
import Links from "../Links";

import "./index.css";

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
    <nav>
      <Logo />
      <div className="divider"></div>
      <SearchBar />
      <div className="divider"></div>
      <Links links={links} />
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
  );
};

export default Navigation;
