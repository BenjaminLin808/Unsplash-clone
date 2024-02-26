import React from "react";
import "./index.css";
import Image from "./Image";

const ImageContainer = ({ images }) => {
  const length = images.length;
  const chunkSize = Math.ceil(length / 3);
  const chunks = [];

  for (let i = 0; i < length; i += chunkSize) {
    chunks.push(images.slice(i, i + chunkSize));
  }

  console.log(chunks);

  const image = {};

  return (
    <div className="imageContainer">
      <div className="imageGridCol">
        <div className="imageGridRow">
          <Image />
          <Image />
          <Image />
        </div>
        <div className="imageGridRow">
          <Image />
          <Image />
          <Image />
        </div>
        <div className="imageGridRow">
          <Image />
          <Image />
          <Image />
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;
