import React, { useState } from "react";
import "./index.css";
import Link from "../Link";

const NavigationLinks = () => {
  const [activeLink, setActiveLink] = useState("Editorial");

  const handleLinkClick = (link, event) => {
    event.preventDefault();
    setActiveLink(link);
  };

  return (
    <div className="linksContainer">
      <div className="homeLinks">
        <Link
          text="Editorial"
          className={
            activeLink === "Editorial" ? "activeLinkContainer" : "linkContainer"
          }
          onClick={(e) => handleLinkClick("Editorial", e)}
        />
        <Link
          text="Unsplash+"
          className={
            activeLink === "Unsplash+" ? "activeLinkContainer" : "linkContainer"
          }
          onClick={(e) => handleLinkClick("Unsplash+", e)}
        />
      </div>
    </div>
  );
};

export default NavigationLinks;
