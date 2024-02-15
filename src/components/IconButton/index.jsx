import React from "react";
import Icons from "./Icons";

const IconButton = ({ icon, className }) => {
  return (
    <>
      <button title="Delete Unsplash" className={className}>
        <Icons icon={icon} />
      </button>
    </>
  );
};

export default IconButton;
