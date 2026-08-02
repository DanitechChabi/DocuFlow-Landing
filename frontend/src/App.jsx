import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DemoRequestPage from './pages/DemoRequestPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/demander" element={<DemoRequestPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
