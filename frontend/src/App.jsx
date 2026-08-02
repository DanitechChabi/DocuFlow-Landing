import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// La page d'accueil est chargée immédiatement (LCP optimal pour la page d'atterrissage).
import HomePage from './pages/HomePage'
// La page de demande de test est chargée à la demande (bundle initial allégé).
const DemoRequestPage = lazy(() => import('./pages/DemoRequestPage'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen bg-slate-50" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/demander" element={<DemoRequestPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
