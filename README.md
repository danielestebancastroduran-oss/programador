SIPO - Proyecto Fullstack (esqueleto completo)

Estructura:
- backend/  -> NestJS + TypeORM (MySQL) - API REST con autenticación JWT
- frontend/ -> React (Vite) + Bootstrap - interfaz con login, registro y área privada

Pasos rápidos:

1) Backend
```bash
cd backend
cp .env.example .env
# editar .env con credenciales MySQL
npm install
npm run seed
npm run start:dev
```

2) Frontend
```bash
cd frontend
npm install
npm run dev
```

Endpoints backend:
- POST /auth/login          { username, password } → { accessToken }
- POST /auth/register       { username, password } → { id, username }
- GET /users/me             (requiere Authorization: Bearer <token>) → { id, username }

Frontend:
- La app arranca en http://localhost:5173
- Usuarios no autenticados ven el formulario de login/registro
- Usuarios autenticados ven un dashboard protegido y pueden hacer logout
- El token JWT se almacena en localStorage

Características:
- ✅ Arquitectura fullstack separada (backend/frontend)
- ✅ API REST con autenticación JWT
- ✅ BD MySQL con TypeORM
- ✅ Login/Registro de usuarios
- ✅ Protección de rutas en frontend
- ✅ Context de autenticación en React
- ✅ Hashing de contraseñas (bcrypt)

Próximos pasos (opcionales):
- Integrar Passport + JwtStrategy en backend
- Añadir refresh tokens y manejo de expiración
- Migraciones TypeORM para producción
- Validaciones más robustas
- Tests E2E

