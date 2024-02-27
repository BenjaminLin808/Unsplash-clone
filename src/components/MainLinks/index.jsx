import React from "react";

import "./index.css";

const MainLinks = ({ links }) => {
  return (
    <div className="mainLinks">
      <ul className="ulist">
        {links.map((link) => (
          <li key={link.text}>
            <a
              href={`/${link.text.toLowerCase()}`}
              className={link.special ? "link special" : "link"}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainLinks;
