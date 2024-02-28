import React, { useRef, useState } from "react";
import "./index.css";
import Link from "../Link";

const NavigationLinks = () => {
  const [activeLink, setActiveLink] = useState("Editorial");
  const [leftButtonActive, setLeftButtonActive] = useState(false);
  const [rightButtonActive, setRightButtonActive] = useState(true);
  const sliderRef = useRef(null);

  const handleLinkClick = (link, event) => {
    event.preventDefault();
    setActiveLink(link);
  };

  const manageIcons = () => {
    if (sliderRef.current.scrollLeft > 0) {
      setLeftButtonActive(true);
    } else {
      setLeftButtonActive(false);
    }

    let maxScrollValue =
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth;

    if (sliderRef.current.scrollLeft >= maxScrollValue) {
      setRightButtonActive(false);
    } else {
      setRightButtonActive(true);
    }
    console.log("scrollWidth", sliderRef.current.scrollWidth);
    console.log("clientWidth", sliderRef.current.clientWidth);
  };

  const handleScrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 100;
      manageIcons();
    }
  };

  const handleScrollRight = () => {
    console.log(sliderRef.current);
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 100;
      manageIcons();
    }
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

  const mainlinks = ["Editorial", "Unsplash+"];

  return (
    <>
      <div className="linksContainer">
        <div className="homeLinks">
          <ul>
            {mainlinks.map((link, index) => {
              return (
                <Link
                  text={link}
                  key={index}
                  className={
                    activeLink === link
                      ? "activeLinkContainer"
                      : "linkContainer"
                  }
                  onClick={(e) => handleLinkClick(link, e)}
                />
              );
            })}
          </ul>
        </div>
        <div
          className="divider2"
          style={{ margin: "20px", height: "30px" }}
        ></div>
        <div
          className={
            leftButtonActive
              ? rightButtonActive
                ? "slider"
                : "slider scrollRight"
              : "slider scrollLeft"
          }
        >
          <div className="leftButtonContainer">
            <button
              className={leftButtonActive ? "leftButton active" : "leftButton"}
              type="button"
              title="scroll list to the left"
              onClick={handleScrollLeft}
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
              className={
                rightButtonActive ? "rightButton active" : "rightButton"
              }
              type="button"
              title="scroll list to the right"
              onClick={handleScrollRight}
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
          <ul className="sliderLinks" ref={sliderRef}>
            {links.map((link, index) => {
              return (
                <Link
                  text={link}
                  key={index}
                  className={
                    activeLink === link
                      ? "activeLinkContainer"
                      : "linkContainer"
                  }
                  onClick={(e) => handleLinkClick(link, e)}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavigationLinks;
