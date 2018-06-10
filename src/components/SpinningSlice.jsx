import React from "react";
import { connect } from "react-redux";
import { makeChanges } from "../redux/actions";
import { transitionSlice } from "../util/animation_util";

const SpinningSlice = ({ children, axis, movement, cube, makeChanges }) => {
  let direction = movement.split("-")[1];

  if (axis === "y" || axis === "z") {
    direction = direction === "left" ? "right" : "left";
  }

  return (
    <div
      className="slice"
      style={{
        transformStyle: "preserve-3d",
        transformOrigin: "203px 203px",
        animation: `SpinningSlice-${direction}-${axis} .4s`
      }}
      onAnimationEnd={() => makeChanges(cube, movement)}
    >
      {children}
    </div>
  );
};

const msp = state => ({
  cube: state.cube
});

const mdp = dispatch => ({
  makeChanges: (cube, movement) => dispatch(makeChanges(cube, movement))
});

export default connect(msp, mdp)(SpinningSlice);
