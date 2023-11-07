const { Pool } = require('pg');
const pool = new Pool({
  // your database configuration goes here
});

class Servicio {
  static async create(nombreServicio, costo, idUsuario) {
    const res = await pool.query(
      'INSERT INTO Servicios (Nombre_Servicio, Costo, ID_Usuario) VALUES ($1, $2, $3) RETURNING *',
      [nombreServicio, costo, idUsuario]
    );
    return res.rows[0];
  }

  static async read(idServicio) {
    const res = await pool.query(
      'SELECT * FROM Servicios WHERE ID_Servicio = $1',
      [idServicio]
    );
    return res.rows[0];
  }

  static async update(idServicio, nombreServicio, costo, idUsuario) {
    const res = await pool.query(
      'UPDATE Servicios SET Nombre_Servicio = $1, Costo = $2, ID_Usuario = $3 WHERE ID_Servicio = $4 RETURNING *',
      [nombreServicio, costo, idUsuario, idServicio]
    );
    return res.rows[0];
  }

  static async delete(idServicio) {
    const res = await pool.query(
      'DELETE FROM Servicios WHERE ID_Servicio = $1 RETURNING *',
      [idServicio]
    );
    return res.rows[0];
  }
}

module.exports = Servicio;