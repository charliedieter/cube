import React from 'react'
import { connect } from 'react-redux'
import { setChanges } from '../../util/cubeUtils'
import MOVEMENTS from '../../util/movements'

function Slice({
  children,
  axis,
  direction,
  movement,
  cube,
  dispatch,
  shuffling,
}) {
  const duration = shuffling ? '0.175s' : '.4s'

  return (
    <div
      className="slice"
      style={{
        transformStyle: 'preserve-3d',
        transformOrigin: '203px 203px',
        animation: `SpinningSlice-${direction}-${axis} ${duration}`,
      }}
      onAnimationEnd={() => {
        window.__currentMove = null

        return dispatch({
          type: 'SET_CHANGES',
          newCube: setChanges(cube, movement),
        })
      }}
    >
      {children}
    </div>
  )
}

const msp = ({ entities: { cube }, ui: { shuffling } }) => ({
  cube,
  shuffling,
})

const ConnectedSlice = connect(msp)(Slice)

const renderMove = (cube, allTiles, queue) => {
  const movement = queue.pop() // FIXME: obviously, thunks were a terrible choice, but I was inexperienced and ambitious
  window.__currentMove = movement

  const toSlice = Object.keys(MOVEMENTS[movement].moves)
  const slicedTiles = allTiles.filter(({ key }) => toSlice.includes(key))
  const unslicedTiles = allTiles.filter(({ key }) => !toSlice.includes(key))
  const { axis, direction } = MOVEMENTS[movement]

  const props = { cube, allTiles, axis, direction, movement }
  return [
    <ConnectedSlice {...props}>{slicedTiles}</ConnectedSlice>,
    ...unslicedTiles,
  ]
}

export default renderMove
