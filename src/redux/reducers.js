import { combineReducers } from "redux";
import { createTiles } from "../util/cubeUtils";

const cube = (oldState = createTiles(), action) => {
  switch (action.type) {
    case "SET_CHANGES":
      return action.newCube;
    default:
      return oldState;
  }
};

const queue = (oldState = [], action) => {
  switch (action.type) {
    case "ENQUEUE":
      return [...action.moves, ...oldState];
    case "SET_CHANGES":
      return oldState.slice(0, -1);
    case "END_SHUFFLE":
      return [];
    default:
      return oldState;
  }
};

const shuffling = (oldState = false, action) => {
  switch (action.type) {
    case "START_SHUFFLE":
      return true;
    case "END_SHUFFLE":
      return false;
    default:
      return oldState;
  }
};

export default combineReducers({
  entities: combineReducers({ cube, queue }),
  ui: combineReducers({ shuffling })
});
