// import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Headache } from './pages/Headache'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/headache" element={<Headache />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
