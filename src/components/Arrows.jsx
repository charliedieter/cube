import React from "react";
import arrow from "../arrow.svg";
import MOVEMENTS from "../util/movements";

const Arrows = ({ addToQueue }) => {
  const arrows = Object.keys(MOVEMENTS).map(d => (
    <img
      src={arrow}
      alt="arrow"
      className={`arrow ${d}`}
      onClick={() => addToQueue(d)}
      key={`arrow-${d}`}
    />
  ));

  return arrows;
};

export default Arrows;
