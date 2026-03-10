import * as mysql from 'mysql2/promise';

async function createDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      port: 3306
    });

    await connection.execute('CREATE DATABASE IF NOT EXISTS sipo_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci');
    console.log('✅ Base de datos sipo_db creada exitosamente');
    await connection.end();
  } catch (error) {
    console.error('❌ Error creando BD:', error.message);
    process.exit(1);
  }
}

createDatabase();
