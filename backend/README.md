SIPO - Backend (NestJS)

Instrucciones básicas:

1. Copiar `.env.example` a `.env` y ajustar variables (DB y JWT).
2. Instalar dependencias:

   npm install

3. Crear la base de datos MySQL indicada en `.env` (por ejemplo `sipo_db`).

4. (Desarrollo) iniciar servidor:

   npm run start:dev

Notas:
- Este scaffold usa TypeORM con `synchronize: true` (solo desarrollo). Cambiar a migraciones en producción.
- Debes crear/registrar usuarios en la tabla `users`. Puedes usar `UsersService.create` o insertar directamente en la DB con password hasheado (bcrypt).

Seed de usuario:

 - Puedes crear un usuario inicial ejecutando:

    npm run seed

 - Opcionalmente define las variables de entorno `SEED_USER` y `SEED_PASS` antes de ejecutar el comando.
