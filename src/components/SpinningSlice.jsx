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
  const direction = movement.split("-")[1];
  return (
    <div
      className="slice"
      style={{
        transformStyle: "preserve-3d",
        transformOrigin: "200px 200px",
        animation: `SpinningSlice-${direction}-${axis} 1s`
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
