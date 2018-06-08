import { setChanges } from "../util/cube_util";

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

export const enqueue = moves => dispatch => {
  return dispatch(addToQueue(moves));
};
