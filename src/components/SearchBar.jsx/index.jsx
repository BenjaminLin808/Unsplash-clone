import React, { useState } from "react";
import IconButton from "../IconButton";
import "./index.css";

const SearchBar = ({ style, search }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    search(inputValue);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setInputValue("");
  };

  return (
    <form
      className={style ? "bannerSearch" : "searchBar"}
      onSubmit={handleSubmit}
    >
      <IconButton icon="MagnifyGlass" className="buttonContainer" />
      <div className="searchBox">
        <input
          type="text"
          placeholder="Search high-resolution images"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <IconButton
        icon="XShape"
        className={inputValue ? "buttonContainer" : "buttonContainer hidden"}
        onClick={handleClear}
      />
      <div className={inputValue ? "divider2" : "divider2 hidden"}></div>
      <IconButton
        icon="VisualSearch"
        className="buttonContainer"
        type="submit"
      />
      <div className="divider"></div>
    </form>
  );
};

export default SearchBar;
