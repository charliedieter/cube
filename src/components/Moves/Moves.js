import React from 'react'
import { connect } from 'react-redux'

function Moves({ queue, dispatch }) {
  const currentMove = queue[queue.length - 1]

  return (
    <div>
      <ul
        style={{
          display: 'flex',
          margin: '1rem auto',
          justifyContent: 'center',
          fontSize: '1.5rem',
        }}
      >
        {['L', 'R', 'U', 'D', 'F', 'B', "L'", "R'", "U'", "D'", "F'", "B'"].map(
          a => {
            const isActive = currentMove === a
            return (
              <li
                key={a}
                onClick={() => {
                  // dispatch({
                  //   type: 'ENQUEUE',
                  //   moves: [a],
                  // })
                }}
                style={{
                  marginRight: '1rem',
                  textTransform: 'lowercase',
                  cursor: 'pointer',
                  opacity: isActive ? 1 : 0.5,
                  color: '#f0f',
                  fontSize: '2rem',
                }}
              >
                {a}
              </li>
            )
          },
        )}
      </ul>
    </div>
  )
}

export default connect(({ entities: { queue } }) => ({ queue }))(Moves)
