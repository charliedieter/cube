import React from "react";
import SpinningSlice from "../components/SpinningSlice";
import MOVEMENTS from "./movements";

export const transitionSlice = (cube, allTiles, queue) => {
  const movement = queue.pop();
  const toSlice = Object.keys(MOVEMENTS[movement]);
  const slicedTiles = allTiles.filter(({ key }) => toSlice.includes(key));
  const unslicedTiles = allTiles.filter(({ key }) => !toSlice.includes(key));
  const axis = movement[1] === "E" ? "y" : "x";

  const props = { cube, allTiles, axis, movement };

  return [
    <SpinningSlice {...props}>{slicedTiles}</SpinningSlice>,
    ...unslicedTiles
  ];
};

// export const shuffling = (cube, allTiles) => {
//   const movements = Object.keys(MOVEMENTS);
//
//   for (let i = 0; i < 30; i++) {}
// };
//
// const randomSlice = (cube, allTiles) => {
//   const movement = movements[Math.floor(Math.random() * movements.length)];
//   const toSlice = Object.keys(MOVEMENTS[movement]);
//   const slicedTiles = allTiles.filter(({ key }) => toSlice.includes(key));
//   const axis = movement[1] === "E" ? "y" : "x";
//   const props = { cube, allTiles, axis, movement };
//   return [
//     <SpinningSlice {...props}>{slicedTiles}</SpinningSlice>,
//     ...unslicedTiles
//   ];
// };
