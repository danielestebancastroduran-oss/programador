import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { login } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [tab, setTab] = useState('login')

  async function handleLogin(e) {
    e.preventDefault()
    setError(null)
    try {
      const res = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })
      if (!res.ok) {
        const err = await res.json().catch(() => ({ message: 'Error' }))
        setError(err.message || 'Credenciales incorrectas')
        return
      }
      const data = await res.json()
      login(data.accessToken, { username })
    } catch (err) {
      setError('No se pudo conectar al servidor')
    }
  }

  async function handleRegister(e) {
    e.preventDefault()
    setError(null)
    try {
      const res = await fetch('http://localhost:3001/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })
      if (!res.ok) {
        const err = await res.json().catch(() => ({ message: 'Error' }))
        setError(err.message || 'Error en registro')
        return
      }
      alert('Registro exitoso. Inicia sesión.')
      setTab('login')
    } catch (err) {
      setError('No se pudo conectar al servidor')
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <button className={`nav-link ${tab === 'login' ? 'active' : ''}`} onClick={() => setTab('login')}>
                Iniciar sesión
              </button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${tab === 'register' ? 'active' : ''}`} onClick={() => setTab('register')}>
                Registrarse
              </button>
            </li>
          </ul>
          <div className="card">
            <div className="card-body">
              {error && <div className="alert alert-danger">{error}</div>}
              {tab === 'login' && (
                <form onSubmit={handleLogin}>
                  <h5 className="mb-3">Iniciar sesión</h5>
                  <div className="mb-3">
                    <label className="form-label">Usuario</label>
                    <input className="form-control" value={username} onChange={e => setUsername(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
                  </div>
                  <button className="btn btn-primary w-100" type="submit">Entrar</button>
                </form>
              )}
              {tab === 'register' && (
                <form onSubmit={handleRegister}>
                  <h5 className="mb-3">Crear cuenta</h5>
                  <div className="mb-3">
                    <label className="form-label">Usuario</label>
                    <input className="form-control" value={username} onChange={e => setUsername(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Contraseña (mín. 6 caracteres)</label>
                    <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
                  </div>
                  <button className="btn btn-success w-100" type="submit">Registrarse</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
