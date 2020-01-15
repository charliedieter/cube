import React from 'react'
import { Link } from 'react-router-dom'
import Cube from '../components/Cube'
import Moves from '../components/Moves'

function Home() {
  return (
    <main className="home">
      <Cube spin />
    </main>
  )
}

export default Home
