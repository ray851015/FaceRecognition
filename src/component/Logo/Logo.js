import React from "react";
import Tilt from "react-tilt";
import brain from "./brain.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt"
        options={{ max: 55 }}
        style={{ height: 150, width: 200 }}
      >
        <div className="Tilt-inner">
          <img style={{ paddingTop: "5px" }} alt="brain" src={brain}></img>
        </div>
      </Tilt>
    </div>
  );
};
export default Logo;
