import React from 'react';
import { Link } from 'react-router-dom';
import Cube from '../components/Cube'

export default function () {
  return (
    <main className="home">
      <h1>learn to solve a rubik's cube</h1>
      <Link className="control" to="/tutorial">get started</Link>
      <Cube spin />
    </main>
  )
}