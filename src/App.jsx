import { useState } from 'react'
import { Routes, Route, Link} from 'react-router-dom'
import './App.css'
import AllPlayers from './components/AllPlayers'
import NavBar from './components/NavBar'
import NewPlayerForm from './components/NewPlayerForm'
import SinglePlayer from './components/SinglePlayer'


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
        <Route path="/addPlayer" element={<NewPlayerForm />} />
        {/* <Route path="/teams" element={<Teams />} /> */}
      </Routes>
    </div>
  )
}

export default App
