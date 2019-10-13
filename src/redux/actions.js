import MOVEMENTS from "../util/movements";
import SOLUTION from "../util/solution";


function makeRandos(dispatch) {
  for (let i = 0; i < 10; i++) {
    const moves = Object.keys(MOVEMENTS);
    const move = moves[Math.floor(Math.random() * 1000) % moves.length];

    setTimeout(() => dispatch({
      type: 'ENQUEUE',
      moves: [move]
    }), 220 * i);
  }
}

function rotateForWhitey(dispatch) {
  if (!window.LAST_MOVE) {
    window.LAST_MOVE = 0;
  }
  const move = window.LAST_MOVE % 4 ? "down-right" : "sideways-left";
  window.LAST_MOVE++;
  dispatch({
    type: 'ENQUEUE',
    moves: [move]
  })
  setTimeout(() => dispatch(findWhitey()), 220)
}

export const infiniteShuffle = () => dispatch => {
  dispatch({ type: 'START_SHUFFLE' })
  makeRandos(dispatch)
  setTimeout(() => dispatch(infiniteShuffle()), 2600);
}

export const shuffle = () => dispatch => {
  dispatch({ type: 'START_SHUFFLE' })
  makeRandos(dispatch);
  setTimeout(() => dispatch({ type: 'END_SHUFFLE' }), 2600);
};

export const endShuffle = () => dispatch => {
  dispatch({ type: 'END_SHUFFLE' })
}

export const findWhitey = () => (dispatch, getState) => {
  const { ui: { shuffling }, entities: { cube: { ucc: { color } } } } = getState();
  if (!shuffling) {
    dispatch({ type: 'START_SHUFFLE' })
  }
  if (color === "white") {
    return dispatch({ type: 'END_SHUFFLE' })
  }
  rotateForWhitey(dispatch)
}

export const makeWhiteCross = (setup = false, lastMove = 0) => (dispatch, getState) => {
  const { ui: { shuffling }, entities: { cube: { utc, ucl, ucc, ucr, ubc, fcl, ftc, fcr, fbc } } } = getState();

  if ( // check for completion
    utc.color === "white" &&
    ucl.color === "white" &&
    ucc.color === "white" &&
    ucr.color === "white" &&
    ubc.color === "white"
  ) {
    return dispatch({ type: 'END_SHUFFLE' })
  }

  if (!shuffling) dispatch({ type: 'START_SHUFFLE' });

  if (ubc.color === 'white') { // if front facing side is white, continue
    dispatch({
      type: 'ENQUEUE',
      moves: ['sideways-left']
    })
    return setTimeout(() => dispatch(makeWhiteCross(false)), 1000);
  }

  if (ftc.color === 'white') {
    // pretty sure this is going to take edge case move
  }

  if (!setup &&  // set up by rotating one of these 4 to front face, only do this for initial setups
    fcl.color !== "white" &&
    ftc.color !== "white" &&
    fcr.color !== "white" &&
    fbc.color !== "white") {
    dispatch({
      type: 'ENQUEUE',
      moves: ['bottomtwo-left']
    })
    return setTimeout(() => dispatch(makeWhiteCross(false)), 1000);
  }

  const move = (lastMove + 1) % SOLUTION.whiteCross.length

  dispatch({
    type: 'ENQUEUE',
    moves: [SOLUTION.whiteCross[move]]
  })

  setTimeout(() => dispatch(makeWhiteCross(true, move)), 220)
}


