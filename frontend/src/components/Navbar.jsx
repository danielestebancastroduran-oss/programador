import React from 'react'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { user, logout } = useAuth()

  if (!user) return null

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand">SIPO</span>
        <div>
          <span className="text-light me-3">Hola, {user.username}</span>
          <button className="btn btn-danger btn-sm" onClick={logout}>
            Cerrar sesión
          </button>
        </div>
      </div>
    </nav>
  )
}
