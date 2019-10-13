import MOVEMENTS from "../util/movements";


function makeMoves(dispatch) {
  for (let i = 0; i < 10; i++) {
    const moves = Object.keys(MOVEMENTS);
    const move = moves[Math.floor(Math.random() * 1000) % moves.length];
    window.enqueueTimeout = setTimeout(() => dispatch({
      type: 'ENQUEUE',
      moves: [move]
    }), 220 * i);
  }
}

export const infiniteShuffle = () => dispatch => {
  dispatch({ type: 'START_SHUFFLE' })

  makeMoves(dispatch)
  window.shuffleTimeout = setTimeout(() => dispatch(infiniteShuffle()), 2600);
}

export const shuffle = () => dispatch => {
  dispatch({ type: 'START_SHUFFLE' })
  makeMoves(dispatch);
  setTimeout(() => dispatch({ type: 'END_SHUFFLE' }), 2600);
};

export const endShuffle = () => dispatch => {
  dispatch({ type: 'END_SHUFFLE' })
  clearTimeout(window.enqueueTimeout)
  clearTimeout(window.shuffleTimeout)
}

export const makeWhiteCross = () => dispatch => {
  dispatch({ type: 'START_SHUFFLE' })
}


