import React from "react";

import "./index.css";

const Category = ({ text }) => {
  return (
    <a className="category" href="#">
      {text}
    </a>
  );
};

export default Category;
