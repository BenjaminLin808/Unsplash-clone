import React from "react";
import "./index.css";
import Image from "./Image";

const ImageContainer = ({ images }) => {
  // const image = {
  //   title: "a table topped with lots of papers on top of a wooden table",
  //   url_m:
  //     "https://images.unsplash.com/photo-1708793699440-67fa853abd4d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
  //   owner: "Joonas Sild",
  // };
  if (!images || !images.length) {
    return null;
  }

  function splitImagesIntoThree(images) {
    const chunkSize = Math.ceil(images.length / 3);

    const chunks = [];
    for (let i = 0; i < images.length; i += chunkSize) {
      chunks.push(images.slice(i, i + chunkSize));
    }
    return chunks;
  }

  const splittedArray = splitImagesIntoThree(images);
  console.log(images.length);
  return (
    <div className="imageContainer">
      <div className="imageGridCol">
        <div className="imageGridRow">
          {splittedArray[0].length !== 0
            ? splittedArray[0].map((image) => <Image image={image} />)
            : null}
        </div>
        <div className="imageGridRow">
          {splittedArray[1].length !== 0
            ? splittedArray[1].map((image) => <Image image={image} />)
            : null}
        </div>
        <div className="imageGridRow">
          {splittedArray[2].length !== 0
            ? splittedArray[2].map((image) => <Image image={image} />)
            : null}
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;
