const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Labsuelos',
  password: '1234',
  port: 5432,
});

module.exports.connect = async () => {
  try {
      await pool.connect();
      console.log('Conectado a la base de datos');
  } catch (error) {
      console.error('Error al conectar a la base de datos', error);
  }
};