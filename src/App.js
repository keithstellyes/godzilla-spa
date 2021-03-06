import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'
import movies from 'data/movies.json'

import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <nav>
        <Link to="/godzilla-spa/">Home</Link>
        <Link to="about">About</Link>
        <Link to="all-movies">Movies</Link>
        <Link to="all-monsters">Monsters</Link>
        <Link to="all-timelines">Timelines</Link>
        <Link to="monster-relationships">Monster Relationships</Link>
      </nav>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
