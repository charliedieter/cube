import { combineReducers } from "redux";
import { SET_CHANGES } from "./actions";
import { createTiles, setChanges } from "../util/cube_util";

const cube = (oldState = createTiles(), action) => {
  switch (action.type) {
    case SET_CHANGES:
      return action.newCube;
    default:
      return oldState;
  }
};

export default combineReducers({
  cube
});
