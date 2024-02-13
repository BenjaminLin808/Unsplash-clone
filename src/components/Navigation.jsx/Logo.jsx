import React from "react";

// import unsplashIcon from "../../assets/unsplashIcon.png";
import unsplashIcon from "../../assets/arrow.svg";

const Logo = () => {
  return (
    <a title="Home - Unsplash" href="/">
      <img className="logo" src={unsplashIcon} alt="unsplash icon" />
    </a>
  );
};

export default Logo;
