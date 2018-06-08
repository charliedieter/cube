import React from "react";
import SpinningSlice from "../components/SpinningSlice";
import MOVEMENTS from "./movements";

export const transitionSlice = (cubeObject, allTiles, spinQueue) => {
  while (spinQueue.length) {
    const movement = spinQueue.pop();
    const toSlice = Object.keys(MOVEMENTS[movement]);
    console.log(movement);
    const slicedTiles = allTiles.filter(({ key }) => toSlice.includes(key));
    const unslicedTiles = allTiles.filter(({ key }) => !toSlice.includes(key));
    const axis = movement[1] === "E" ? "y" : "x";

    const props = { cubeObject, axis, movement };

    return [
      <SpinningSlice {...props}>{slicedTiles}</SpinningSlice>,
      ...unslicedTiles
    ];
  }
};
