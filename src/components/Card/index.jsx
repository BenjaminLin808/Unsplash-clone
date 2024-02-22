import React from "react";

import "./index.css";

const Card = ({ children, padding }) => {
  return (
    <div className="cardContainer">
      <section className={padding ? "cardSection padding" : "cardSection"}>
        {children}
      </section>
    </div>
  );
};

export default Card;
