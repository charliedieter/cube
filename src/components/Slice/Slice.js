import React from "react";
import { connect } from "react-redux";
import { setChanges } from "../../util/cubeUtils";

import MOVEMENTS from "../../util/movements";

function Slice({ children, axis, movement, cube, dispatch, shuffling }) {
  let direction = movement.split("-")[1];

  if (axis === "y" || axis === "z") {
    direction = direction === "left" ? "right" : "left";
  }
  const duration = shuffling ? "0.175s" : ".4s";

  return (
    <div
      className="slice"
      style={{
        transformStyle: "preserve-3d",
        transformOrigin: "203px 203px",
        animation: `SpinningSlice-${direction}-${axis} ${duration}`
      }}
      onAnimationEnd={() => dispatch({
        type: 'SET_CHANGES',
        newCube: setChanges(cube, movement)
      })}
    >
      {children}
    </div>
  );
};

const msp = ({ entities, ui }) => ({
  cube: entities.cube,
  shuffling: ui.shuffling
});


const ConnectedSlice = connect(msp)(Slice);

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
