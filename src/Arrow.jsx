import React from "react";
import arrow from "./arrow.svg";

const Arrow = ({ twist, direction }) => {
  return (
    <img
      src={arrow}
      alt="arrow"
      className={`arrow ${direction}`}
      onClick={() => twist(direction)}
    />
  );
};

export default Arrow;
