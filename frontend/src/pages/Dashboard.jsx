import React from 'react'

export default function Dashboard() {
  return (
    <div className="container mt-5">
      <div className="alert alert-success">
        <h3>Bienvenido al Dashboard</h3>
        <p>Has iniciado sesión exitosamente. Este es un área protegida.</p>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Contenido privado</h5>
          <p className="card-text">Solo usuarios autenticados pueden ver esta página.</p>
        </div>
      </div>
    </div>
  )
}
