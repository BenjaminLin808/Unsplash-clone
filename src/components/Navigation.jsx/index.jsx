import React from "react";
import Logo from "./Logo";
import SearchBar from "../SearchBar.jsx";
import IconButton from "../IconButton";

import "./index.css";

const Navigation = () => {
  return (
    <nav>
      <Logo />
      <div className="divider"></div>
      <SearchBar />
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
