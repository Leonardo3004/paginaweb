const express = require('express');
const app = express();
const db = require('./config/db');
const usuarioRoutes = require('./routes/usuarios');
const muestraRoutes = require('./routes/muestras');
const servicioRoutes = require('./routes/servicios');
const resultadoRoutes = require('./routes/resultados');

// Connect to the PostgreSQL database
db.connect();

// Middleware to parse JSON bodies
app.use(express.json());

// Set up routes
app.use('/usuarios', usuarioRoutes);
app.use('/muestras', muestraRoutes);
app.use('/servicios', servicioRoutes);
app.use('/resultados', resultadoRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Manejo de Libros');
});

module.exports = app;