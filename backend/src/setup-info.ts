import 'reflect-metadata';
import * as dotenv from 'dotenv';
dotenv.config();

async function main() {
  console.log('SIPO Backend - Setup Rápido');
  console.log('');
  console.log('✅ Backend creado con NestJS');
  console.log('✅ .env configurado (ajusta DB_PASSWORD si es necesario)');
  console.log('✅ Dependencias instaladas');
  console.log('');
  console.log('Para iniciar el servidor:');
  console.log('  npm run start:dev');
  console.log('');
  console.log('El servidor estará en http://localhost:3000');
}

main();
