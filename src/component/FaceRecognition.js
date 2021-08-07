import React from "react";
import "../component/FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center ma">
      <div className="mt2 absolute">
        <img
          alt=""
          id="inputimage"
          src={imageUrl}
          width="500px"
          height="auto"
        />
        <div
          className="bounding-box"
          style={{
            bottom: box.bottomRow,
            left: box.leftCol,
            right: box.rightCol,
            top: box.topRow,
          }}
        ></div>
      </div>
    </div>
  );
};
export default FaceRecognition;
