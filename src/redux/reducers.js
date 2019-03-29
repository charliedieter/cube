import { combineReducers } from "redux";
import {
  SET_CHANGES,
  ENQUEUE,
  START_SHUFFLE,
  END_SHUFFLE,
  START_WHITE_CROSS,
  END_WHITE_CROSS
} from "./actions";
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
      return [...action.moves, ...oldState];
    case SET_CHANGES:
      const newState = oldState.slice();
      newState.pop();
      return newState;
    default:
      return oldState;
  }
};

const shuffling = (oldState = false, action) => {
  switch (action.type) {
    case START_SHUFFLE:
      return true;
      break;
    case END_SHUFFLE:
      return false;
      break;
    default:
      return oldState;
  }
};

const whiteCrossActive = (oldState = false, action) => {
  switch (action.type) {
    case START_WHITE_CROSS:
      return true;
      break;
    case END_WHITE_CROSS:
      return false;
      break;
    default:
      return oldState;
  }
};

const entities = combineReducers({ cube, queue });
const ui = combineReducers({ shuffling, whiteCrossActive });

export default combineReducers({
  entities,
  ui
});
