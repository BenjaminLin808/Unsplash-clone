import React, { useState } from "react";
import "./index.css";
import Link from "../Link";

const NavigationLinks = () => {
  const [activeLink, setActiveLink] = useState("Editorial");

  const handleLinkClick = (link, event) => {
    event.preventDefault();
    setActiveLink(link);
  };

  const links = [
    "Cool Tones",
    "Wallpapers",
    "Nature",
    "3D Renders",
    "Travel",
    "Architecture & Interiors",
    "Textures & Patterns",
    "Street Photography",
    "Film",
    "Archival",
    "Experimental",
    "Animals",
    "Fashion & Beauty",
    "People",
    "Spirituality",
    "Business & Work",
    "Food & Drink",
    "Health & Wellness",
    "Sports",
    "Current Events",
  ];

  return (
    <>
      <div className="linksContainer">
        <div className="homeLinks">
          <Link
            text="Editorial"
            className={
              activeLink === "Editorial"
                ? "activeLinkContainer"
                : "linkContainer"
            }
            onClick={(e) => handleLinkClick("Editorial", e)}
          />
          <Link
            text="Unsplash+"
            className={
              activeLink === "Unsplash+"
                ? "activeLinkContainer"
                : "linkContainer"
            }
            onClick={(e) => handleLinkClick("Unsplash+", e)}
          />
        </div>
        <div
          className="divider2"
          style={{ margin: "20px", height: "30px" }}
        ></div>
        <div className="slider">
          <div className="leftButtonContainer">
            <button
              className="leftButton"
              type="button"
              title="scroll list to the left"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                version="1.1"
                aria-hidden="false"
              >
                <desc lang="en-US">Chevron left</desc>
                <path d="M15.5 18.5 14 20l-8-8 8-8 1.5 1.5L9 12l6.5 6.5Z"></path>
              </svg>
            </button>
          </div>
          <div className="rightButtonContainer">
            <button
              className="rightButton"
              type="button"
              title="scroll list to the right"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                version="1.1"
                aria-hidden="false"
              >
                <desc lang="en-US">Chevron right</desc>
                <path d="M8.5 5.5 10 4l8 8-8 8-1.5-1.5L15 12 8.5 5.5Z"></path>
              </svg>
            </button>
          </div>
          {links.map((link, index) => {
            return (
              <Link
                text={link}
                key={index}
                className={
                  activeLink === link ? "activeLinkContainer" : "linkContainer"
                }
                onClick={(e) => handleLinkClick(link, e)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NavigationLinks;
