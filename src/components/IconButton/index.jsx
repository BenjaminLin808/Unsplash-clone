import React from "react";
import Icons from "./Icons";

const IconButton = ({ icon, className, type = null, onClick }) => {
  return (
    <>
      <button
        title="Delete Unsplash"
        className={className}
        type={type}
        onClick={onClick}
      >
        <Icons icon={icon} />
      </button>
    </>
  );
};

export default IconButton;
