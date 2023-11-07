const { Pool } = require('pg');
const pool = new Pool({
  // your database configuration here
});

class Resultado {
  static async create(resultado, fecha, idMuestra, idServicio) {
    const { rows } = await pool.query(
      'INSERT INTO Resultados (Resultado, Fecha, ID_Muestra, ID_Servicio) VALUES ($1, $2, $3, $4) RETURNING *',
      [resultado, fecha, idMuestra, idServicio]
    );
    return rows[0];
  }

  static async read(idResultado) {
    const { rows } = await pool.query(
      'SELECT * FROM Resultados WHERE ID_Resultado = $1',
      [idResultado]
    );
    return rows[0];
  }

  static async update(idResultado, resultado, fecha, idMuestra, idServicio) {
    const { rows } = await pool.query(
      'UPDATE Resultados SET Resultado = $1, Fecha = $2, ID_Muestra = $3, ID_Servicio = $4 WHERE ID_Resultado = $5 RETURNING *',
      [resultado, fecha, idMuestra, idServicio, idResultado]
    );
    return rows[0];
  }

  static async delete(idResultado) {
    const { rows } = await pool.query(
      'DELETE FROM Resultados WHERE ID_Resultado = $1 RETURNING *',
      [idResultado]
    );
    return rows[0];
  }
}

module.exports = Resultado;