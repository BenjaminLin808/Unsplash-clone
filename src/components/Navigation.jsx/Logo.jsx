import React from "react";

import unsplashIcon from "../../assets/images/unsplash_icon.png";

const Logo = () => {
  return (
    <a title="Home - Unsplash" href="/">
      <img className="logo" src={unsplashIcon} alt="unsplash icon" />
    </a>
  );
};

export default Logo;
