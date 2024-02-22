import React from "react";
import { useState } from "react";
import IconButton from "../IconButton";

import "./index.css";

const SearchBar = ({ style }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <form className={style ? "bannerSearch" : "searchBar"}>
      <IconButton icon="MagnifyGlass" className="buttonContainer" />
      <div className="searchBox">
        <input
          type="text"
          placeholder="Search high-resolution images"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <IconButton
        icon="XShape"
        className={inputValue ? "buttonContainer" : "buttonContainer hidden"}
      />
      <div className={inputValue ? "divider2" : "divider2 hidden"}></div>
      <IconButton icon="VisualSearch" className="buttonContainer" />
      <div className="divider"></div>
    </form>
  );
};

export default SearchBar;
