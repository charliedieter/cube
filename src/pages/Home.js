import React from 'react'
import { Link } from 'react-router-dom'
import Cube from '../components/Cube'
import Moves from '../components/Moves'

function Home() {
  return (
    <main className="home">
      <h2 style={{ fontSize: '3rem', margin: '0 auto' }}>cube</h2>
      <h1 style={{ margin: '0 auto 1rem' }}>
        A simple Rubik's cube tutorial (work in progress).
      </h1>
      <Link className="control" to="/tutorial" style={{ color: '#fff' }}>
        get started
      </Link>
      <Cube spin />
    </main>
  )
}

export default Home
