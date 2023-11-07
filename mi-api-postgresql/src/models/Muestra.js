const { Pool } = require('pg');
const pool = new Pool({
  // your database configuration goes here
});

class Muestra {
  static async create(fechaRecogida, ubicacion, idUsuario) {
    const res = await pool.query(
      'INSERT INTO Muestras (Fecha_Recogida, Ubicación, ID_Usuario) VALUES ($1, $2, $3) RETURNING *',
      [fechaRecogida, ubicacion, idUsuario]
    );
    return res.rows[0];
  }

  static async read(idMuestra) {
    const res = await pool.query(
      'SELECT * FROM Muestras WHERE ID_Muestra = $1',
      [idMuestra]
    );
    return res.rows[0];
  }

  static async update(idMuestra, fechaRecogida, ubicacion, idUsuario) {
    const res = await pool.query(
      'UPDATE Muestras SET Fecha_Recogida = $1, Ubicación = $2, ID_Usuario = $3 WHERE ID_Muestra = $4 RETURNING *',
      [fechaRecogida, ubicacion, idUsuario, idMuestra]
    );
    return res.rows[0];
  }

  static async delete(idMuestra) {
    const res = await pool.query(
      'DELETE FROM Muestras WHERE ID_Muestra = $1 RETURNING *',
      [idMuestra]
    );
    return res.rows[0];
  }
}

module.exports = Muestra;