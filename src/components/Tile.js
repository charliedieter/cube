import React from 'react'
import POSITIONS from '../util/positions'

function Tile({ backgroundColor, position }) {
  return (
    <div
      className={`tile ${position}`}
      style={{
        backgroundColor,
        transform: POSITIONS[position],
      }}
    />
  )
}

export default Tile
