import { combineReducers } from "redux";
import { SET_CHANGES, ENQUEUE } from "./actions";
import { createTiles } from "../util/cube_util";

const cube = (oldState = createTiles(), action) => {
  switch (action.type) {
    case SET_CHANGES:
      return action.newCube;
    default:
      return oldState;
  }
};

const queue = (oldState = [], action) => {
  switch (action.type) {
    case ENQUEUE:
      return [...oldState, ...action.moves];
    case SET_CHANGES:
      const newState = oldState.slice();
      newState.pop();
      return newState;
    default:
      return oldState;
  }
};

export default combineReducers({
  cube,
  queue
});
