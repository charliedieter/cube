import React, { Component } from 'react'
import Tile from './Tile'
import renderMove from './Slice'
import { createTiles, setChanges, randomMoves } from '../util/cubeUtils'

class Cube extends Component {
  state = {
    queue: [],
    cube: createTiles(),
  }

  componentDidMount() {
    this.setState({
      queue: randomMoves(),
    })
  }

  onMoveEnd = () => {
    this.setState(prevState => {
      const cube = setChanges(prevState.cube, prevState.queue[0])
      const newQueue = prevState.queue.slice(1)

      return {
        cube,
        queue: newQueue.length ? newQueue : randomMoves(),
      }
    })
  }

  render() {
    const { queue, cube } = this.state
    const tiles = Object.values(cube).map(tile => (
      <Tile key={tile.position} {...tile} />
    ))

    return (
      <div id="cube-container">
        <div id="cube" className="spin">
          {queue.length ? renderMove(tiles, queue[0], this.onMoveEnd) : tiles}
        </div>
      </div>
    )
  }
}

export default Cube
