import { setChanges } from "../util/cube_util";
import MOVEMENTS from "../util/movements";

export const SET_CHANGES = "SET_CHANGES";
export const ENQUEUE = "ENQUEUE";

const change = newCube => {
  return {
    type: SET_CHANGES,
    newCube
  };
};

const addToQueue = moves => {
  return {
    type: ENQUEUE,
    moves: moves
  };
};

export const makeChanges = (cube, movement) => dispatch => {
  const newCube = setChanges(cube, movement);
  return dispatch(change(newCube));
};

export const enqueue = move => dispatch => {
  return dispatch(addToQueue(move));
};

export const shuffle = () => dispatch => {
  for (let i = 0; i < 60; i++) {
    const moves = Object.keys(MOVEMENTS);
    const move = moves[Math.floor(Math.random() * 1000) % moves.length];
    setTimeout(() => dispatch(addToQueue([move])), 250 * i);
  }
};
