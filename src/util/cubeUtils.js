import COLORS from './colors'
import MOVEMENTS from './movements'

export const createTiles = () => {
  const faces = ['up', 'front', 'down', 'left', 'right', 'back']
  const cols = ['l', 'c', 'r']
  const rows = ['t', 'c', 'b']
  const tiles = {}

  for (let i = 0; i < faces.length; i++) {
    for (let j = 0; j < cols.length; j++) {
      for (let k = 0; k < rows.length; k++) {
        const position = faces[i][0] + rows[k] + cols[j]
        const color = COLORS[position[0]]
        tiles[position] = { position, color }
      }
    }
  }
  return tiles
}

export const setChanges = (cube, direction) => {
  const move = MOVEMENTS[direction].moves

  return Object.values(cube).reduce((newTiles, tile) => {
    tile.position = move[tile.position] ? move[tile.position] : tile.position
    newTiles[[tile.position]] = tile
    return newTiles
  }, {})
}
