import React from 'react'
import { useAuth } from './context/AuthContext'
import Navbar from './components/Navbar'
import PrivateRoute from './components/PrivateRoute'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

export default function App() {
  const { user, loading } = useAuth()

  if (loading) return <div className="container mt-5"><p>Cargando...</p></div>

  return (
    <>
      <Navbar />
      {user ? <Dashboard /> : <Login />}
    </>
  )
}
