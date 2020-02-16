import React from 'react'
import MOVEMENTS from '../util/movements'

function Slice({ children, axis, direction, setChanges }) {
  return (
    <div
      className="slice"
      style={{
        transformStyle: 'preserve-3d',
        transformOrigin: '203px 203px',
        animation: `SpinningSlice-${direction}-${axis} 300ms`,
      }}
      onAnimationEnd={setChanges}
    >
      {children}
    </div>
  )
}

const renderMove = (allTiles, move, setChanges) => {
  const toSlice = Object.keys(MOVEMENTS[move].moves)
  const sliced = []
  const unsliced = []

  allTiles.forEach(t => {
    if (toSlice.includes(t.key)) {
      return sliced.push(t)
    }
    return unsliced.push(t)
  })

  return [
    <Slice
      key={new Date().toISOString()}
      {...MOVEMENTS[move]}
      setChanges={setChanges}
    >
      {sliced}
    </Slice>,
    ...unsliced,
  ]
}

export default renderMove
