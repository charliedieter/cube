// TODO: probably a better way to do this (css classes) 🤷‍
import COLORS from "./colors";
import MOVEMENTS from "./movements";

export const createTiles = () => {
  const faces = ["up", "front", "down", "left", "right", "back"];
  const cols = ["l", "c", "r"];
  const rows = ["t", "c", "b"];
  const tiles = [];
  for (let i = 0; i < faces.length; i++) {
    for (let j = 0; j < cols.length; j++) {
      for (let k = 0; k < rows.length; k++) {
        const position = faces[i][0] + rows[k] + cols[j];
        const color = COLORS[position[0]];
        tiles.push({ position, color });
      }
    }
  }
  return tiles;
};

export const setChanges = (cube, movement) => {
  console.log(cube, movement);
  const dir = MOVEMENTS[movement];
  const tiles = cube.slice();
  const newTiles = tiles.map(tile => {
    if (dir[tile["position"]]) {
      tile["position"] = dir[tile["position"]];
    }
    return tile;
  });
  return newTiles;
};
