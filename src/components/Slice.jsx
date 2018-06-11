import React from "react";
import { connect } from "react-redux";
import { makeChanges } from "../redux/actions";
import MOVEMENTS from "../util/movements";

const Slice = ({ children, axis, movement, cube, makeChanges, shuffling }) => {
  let direction = movement.split("-")[1];
  if (axis === "y" || axis === "z") {
    direction = direction === "left" ? "right" : "left";
  }
  const duration = "0.175s";

  return (
    <div
      className="slice"
      style={{
        transformStyle: "preserve-3d",
        transformOrigin: "203px 203px",
        animation: `SpinningSlice-${direction}-${axis} ${duration}`
      }}
      onAnimationEnd={() => makeChanges(cube, movement)}
    >
      {children}
    </div>
  );
};

const msp = state => ({
  cube: state.cube,
  shuffling: state.shuffling
});

const mdp = dispatch => ({
  makeChanges: (cube, movement) => dispatch(makeChanges(cube, movement))
});

const ConnectedSlice = connect(msp, mdp)(Slice);

const renderMove = (cube, allTiles, queue) => {
  const movement = queue.pop();

  const toSlice = Object.keys(MOVEMENTS[movement]);
  const slicedTiles = allTiles.filter(({ key }) => toSlice.includes(key));
  const unslicedTiles = allTiles.filter(({ key }) => !toSlice.includes(key));
  const axis = movement[1] === "E" ? "y" : movement[1] === "S" ? "z" : "x";

  const props = { cube, allTiles, axis, movement };

  return [
    <ConnectedSlice {...props}>{slicedTiles}</ConnectedSlice>,
    ...unslicedTiles
  ];
};

export default renderMove;
