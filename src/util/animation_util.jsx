import SpinningSlice from "./SpinningSlice";
import MOVEMENTS from "./movements";

export const transitionSlice = ({ allTiles, rotation, axis }) => {
  const toSlice = Object.keys(MOVEMENTS[rotation]);

  const slicedTiles = allTiles.filter(({ key }) => toSlice.includes(key));
  const unslicedTiles = allTiles.filter(({ key }) => !toSlice.includes(key));

  const props = { axis, rotation };

  return [
    <SpinningSlice {...props}>{slicedTiles}</SpinningSlice>,
    ...unslicedTiles
  ];
};
