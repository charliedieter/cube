import React from "react";
import { connect } from "react-redux";
import arrow from "./arrow.svg";
import MOVEMENTS from "../../util/movements";
import { enqueue } from "../../redux/actions";

const Arrows = ({ addToQueue }) => {
  const arrows = Object.keys(MOVEMENTS).map(d => (
    <img
      src={arrow}
      alt="arrow"
      className={`arrow ${d}`}
      onClick={() => addToQueue([d])}
      key={`arrow-${d}`}
    />
  ));

  return arrows;
};

const mdp = dispatch => ({
  addToQueue: move => dispatch(enqueue(move))
});

export default connect(null, mdp)(Arrows);
