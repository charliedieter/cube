import MOVEMENTS from "../util/movements";

export const shuffle = () => dispatch => {
  dispatch({ type: 'START_SHUFFLE' })

  for (let i = 0; i < 30; i++) {
    const moves = Object.keys(MOVEMENTS);
    const move = moves[Math.floor(Math.random() * 1000) % moves.length];
    setTimeout(() => dispatch({
      type: 'ENQUEUE',
      moves: [move]
    }), 220 * i);
  }
  setTimeout(() => dispatch({ type: 'END_SHUFFLE' }), 7000);
};


