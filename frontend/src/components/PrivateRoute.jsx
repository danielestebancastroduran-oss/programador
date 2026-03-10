import React from 'react'
import { useAuth } from '../context/AuthContext'
import Login from '../pages/Login'

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth()

  if (loading) return <div className="container mt-5"><p>Cargando...</p></div>
  if (!user) return <Login />
  return children
}
