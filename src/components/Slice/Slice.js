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

const msp = ({ entities: { cube }, ui: { shuffling } }) => ({ cube, shuffling });

const ConnectedSlice = connect(msp)(Slice);

function getAxis(movement) {
  if (movement === "down-right") {
    return 'x'
  } else if (movement === "sideways-left" || movement === 'bottomtwo-left') {
    return 'y'
  }
  return movement[1] === "E" ? "y" : movement[1] === "S" ? "z" : "x";
}

const renderMove = (cube, allTiles, queue) => {
  const movement = queue[queue.length - 1];
  const toSlice = Object.keys(MOVEMENTS[movement].moves);
  const slicedTiles = allTiles.filter(({ key }) => toSlice.includes(key));
  const unslicedTiles = allTiles.filter(({ key }) => !toSlice.includes(key));
  const axis = getAxis(movement)
  console.log(MOVEMENTS[movement].moves)
  const props = { cube, allTiles, axis, movement };

  return [
    <ConnectedSlice {...props}>{slicedTiles}</ConnectedSlice>,
    ...unslicedTiles
  ];
};

export default renderMove;
