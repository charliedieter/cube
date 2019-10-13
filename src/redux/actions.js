import MOVEMENTS from "../util/movements";


function makeRandos(dispatch) {
  for (let i = 0; i < 10; i++) {
    const moves = Object.keys(MOVEMENTS);
    const move = moves[Math.floor(Math.random() * 1000) % moves.length];

    window.enqueueTimeout = setTimeout(() => dispatch({
      type: 'ENQUEUE',
      moves: [move]
    }), 220 * i);
  }
}

function rotate(dispatch) {
  const move = window.LAST_MOVE === "down-right" ? "sideways-left" : "down-right";
  window.LAST_MOVE = move;

  dispatch({
    type: 'ENQUEUE',
    moves: [move]
  })

  setTimeout(() => dispatch(findWhitey()), 220)
}

export const infiniteShuffle = () => dispatch => {
  dispatch({ type: 'START_SHUFFLE' })

  makeRandos(dispatch)
  window.shuffleTimeout = setTimeout(() => dispatch(infiniteShuffle()), 2600);
}

export const shuffle = () => dispatch => {
  dispatch({ type: 'START_SHUFFLE' })
  makeRandos(dispatch);
  setTimeout(() => dispatch({ type: 'END_SHUFFLE' }), 2600);
};

export const endShuffle = () => dispatch => {
  dispatch({ type: 'END_SHUFFLE' })
  clearTimeout(window.enqueueTimeout)
  clearTimeout(window.shuffleTimeout)
}


export const findWhitey = () => (dispatch, getState) => {
  const { ui: { shuffling }, entities: { cube: { fcc: { color } } } } = getState();

  if (!shuffling) {
    dispatch({ type: 'START_SHUFFLE' })
  }

  if (color === "white") {
    return dispatch({ type: 'END_SHUFFLE' })
  }

  rotate(dispatch)
}

export const makeWhiteCross = () => dispatch => {
  dispatch({ type: 'START_SHUFFLE' })
}


