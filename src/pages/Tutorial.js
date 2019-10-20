import React from 'react'
import Cube from '../components/Cube'
import Controls from '../components/Controls'
import Nav from '../components/Nav'
import Moves from '../components/Moves'

function Tutorial() {
  return (
    <main className="tutorial">
      <Nav />
      <Cube />
      <Moves />
      <Controls />
    </main>
  )
}

export default Tutorial
