import React from "react";

import "./index.css";

const Link = (props) => {
  return (
    <div className={props.className}>
      <a
        className="linkStyle"
        onClick={props.onClick}
        href={`/${props.text.toLowerCase()}`}
      >
        {props.text}
      </a>
    </div>
  );
};

export default Link;
