import { setChanges } from "../util/cube_util";

export const SET_CHANGES = "SET_CHANGES";

const change = newCube => {
  return {
    type: SET_CHANGES,
    newCube
  };
};

export const makeChanges = (cube, movement) => dispatch => {
  const newCube = setChanges(cube, movement);
  return dispatch(change(newCube));
};
