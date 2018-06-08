import React from "react";
import SpinningSlice from "../components/SpinningSlice";
import MOVEMENTS from "./movements";

export const transitionSlice = (cubeObject, allTiles, spinQueue) => {
  while (spinQueue.length) {
    const movement = spinQueue.pop();
    const toSlice = Object.keys(MOVEMENTS[movement]);

    const slicedTiles = allTiles.filter(({ key }) => toSlice.includes(key));
    const unslicedTiles = allTiles.filter(({ key }) => !toSlice.includes(key));
    const axis = "x";

    const props = { cubeObject, axis, movement };

    return [
      <SpinningSlice {...props}>{slicedTiles}</SpinningSlice>,
      ...unslicedTiles
    ];
  }
};
