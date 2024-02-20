import React from "react";

import "./index.css";

const Links = ({ links }) => {
  console.log(links);
  console.log(links[0].text);
  return (
    <div className="linksContainer">
      <ul className="ulist">
        {links.map((link) => (
          <li key={link.text}>
            <a
              href={`/${link.text.toLowerCase()}`}
              className={link.special ? "special" : ""}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
