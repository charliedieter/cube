import React from 'react'
import POSITIONS from '../../util/positions'

function Tile({ backgroundColor, tile }) {
  return (
    <div
      className={`tile ${tile}`}
      style={{
        backgroundColor,
        transform: POSITIONS[tile],
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
  )
}

export default Tile
