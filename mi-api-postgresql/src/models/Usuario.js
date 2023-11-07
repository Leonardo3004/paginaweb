const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Labsuelos',
  password: '1234',
  port: 5432,
});

class Usuario {
  static async create(email, password, identification) {
    const result = await pool.query(
      'INSERT INTO Usuarios (Email, Contraseña, Identificacion) VALUES ($1, $2, $3) RETURNING *',
      [email, password, identification]
    );
    return result.rows[0];
  }

  static async getAll() {
    const result = await pool.query('SELECT * FROM Usuarios');
    return result.rows;
  }

  

  static async read(id) {
    const result = await pool.query(
      'SELECT * FROM Usuarios WHERE ID_Usuario = $1',
      [id]
    );
    return result.rows[0];
  }

  static async update(id, email, password, identification) {
    const result = await pool.query(
      'UPDATE Usuarios SET Email = $1, Contraseña = $2, Identificacion = $3 WHERE ID_Usuario = $4 RETURNING *',
      [email, password, identification, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await pool.query(
      'DELETE FROM Usuarios WHERE ID_Usuario = $1 RETURNING *',
      [id]
    );
    return result.rows[0];
  }
}

module.exports = Usuario;