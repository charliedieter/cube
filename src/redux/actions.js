import MOVEMENTS from "../util/movements";

function makeMoves(dispatch) {
  for (let i = 0; i < 30; i++) {
    const moves = Object.keys(MOVEMENTS);
    const move = moves[Math.floor(Math.random() * 1000) % moves.length];
    setTimeout(() => dispatch({
      type: 'ENQUEUE',
      moves: [move]
    }), 220 * i);
  }
}

export const infiniteShuffle = () => dispatch => {
  dispatch({ type: 'START_SHUFFLE' })

  makeMoves(dispatch)
  setTimeout(() => dispatch(infiniteShuffle()), 7000);
}

export const shuffle = () => dispatch => {
  dispatch({ type: 'START_SHUFFLE' })
  makeMoves(dispatch);
  setTimeout(() => dispatch({ type: 'END_SHUFFLE' }), 7000);
};

export const makeWhiteCross = () => dispatch => {
  dispatch({ type: 'START_SHUFFLE' })
}


