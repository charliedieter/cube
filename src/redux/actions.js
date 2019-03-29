import { setChanges } from "../util/cube_util";
import { WINNING_MOVES } from "../util/solution";
import MOVEMENTS from "../util/movements";

export const SET_CHANGES = "SET_CHANGES";
export const ENQUEUE = "ENQUEUE";
export const START_SHUFFLE = "START_SHUFFLE";
export const END_SHUFFLE = "END_SHUFFLE";
export const START_WHITE_CROSS = "START_WHITE_CROSS";
export const END_WHITE_CROSS = "END_WHITE_CROSS";

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

const startShuffle = dispatch => dispatch({ type: START_SHUFFLE });
const endShuffle = dispatch => dispatch({ type: END_SHUFFLE });

const startWhiteCross = dispatch => dispatch({ type: START_WHITE_CROSS });
const endWhiteCross = dispatch => dispatch({ type: END_WHITE_CROSS });

export const makeChanges = (cube, movement) => dispatch => {
  const newCube = setChanges(cube, movement);
  return dispatch(change(newCube));
};

export const enqueue = move => dispatch => {
  return dispatch(addToQueue(move));
};

export const shuffle = () => dispatch => {
  startShuffle(dispatch);
  for (let i = 0; i < 30; i++) {
    const moves = Object.keys(MOVEMENTS);
    const move = moves[Math.floor(Math.random() * 1000) % moves.length];
    setTimeout(() => dispatch(addToQueue([move])), 220 * i);
  }
  setTimeout(() => endShuffle(dispatch), 7000);
};

export const whiteCross = cube => dispatch => {
  startShuffle(dispatch);
  for (let i = 0; i < 4; i++) {
    setTimeout(
      () => dispatch(addToQueue([WINNING_MOVES["whiteCross"][i]])),
      500 * i
    );
  }
  setTimeout(() => endShuffle(dispatch), 2000);
};

// startShuffle(dispatch);
// while (
//   cube["utc"].color !== "white" &&
//   cube["ucl"].color !== "white" &&
//   cube["ucc"].color !== "white" &&
//   cube["ucr"].color !== "white" &&
//   cube["ubc"].color !== "white"
// ) {
//   for (let i = 0; i < 4; i++) {
//     setTimeout(() => dispatch(addToQueue([WINNING_MOVES[i]]), 220 * i));
//   }
// }
// endShuffle(dispatch);
