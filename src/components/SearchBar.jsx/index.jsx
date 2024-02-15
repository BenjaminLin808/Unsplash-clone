import React from "react";
import IconButton from "../IconButton";

import "./index.css";

const SearchBar = () => {
  return (
    <form className="searchBar">
      <IconButton icon="MagnifyGlass" className="buttonContainer" />
      <div className="searchBox">
        <input type="text" placeholder="Search high-resolution images" />
      </div>
      <IconButton icon="XShape" className="buttonContainer" />
      <div className="divider2"></div>
      <IconButton icon="VisualSearch" className="buttonContainer" />
      <div className="divider"></div>
    </form>
  );
};

export default SearchBar;
