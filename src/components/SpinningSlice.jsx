import React from "react";
import { connect } from "react-redux";
import { makeChanges } from "../redux/actions";

const SpinningSlice = ({
  children,
  cubeObject,
  axis,
  movement,
  cube,
  makeChanges
}) => {
  let direction = movement.split("-")[1];
  //swap for y for some reason
  if (axis === "y") {
    direction = direction === "left" ? "right" : "left";
  }

  console.log(direction, axis);
  return (
    <div
      className="slice"
      style={{
        transformStyle: "preserve-3d",
        transformOrigin: "200px 200px",
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
