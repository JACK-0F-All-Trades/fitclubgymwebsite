import React from "react";
import "./Gallery.css";

const Gallery = ({ img1, img2, img3, img4 }) => {
  return (
    <div className="gallery">
      <img src={img1} alt="img1" />
      <img src={img2} alt="img2" />
      <img src={img3} alt="img3" />
      <img src={img4} alt="img4" />
    </div>
  );
};

export default Gallery;
