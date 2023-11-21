const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');
const moment = require('moment');

const app = express();
app.use(cors());
app.use(bodyParser.json());


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'grass',
  password: '1234',
  port: 5432,//5432
});

// Rutas CRUD aquí

app.get('/', (req, res) => {
  res.send('Bienvenido a la API de manejo de base de datos');
});

// Obtener todos los clientes
app.get('/api/clientes', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM Clientes');

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Obtener un cliente por ID
app.get('/api/clientes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM Clientes WHERE id = $1', [id]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Crear un nuevo cliente
app.post('/api/clientes', async (req, res) => {
  try {
    let { nombre, cedula, telefono, correo } = req.body;
    console.log({ nombre, cedula, telefono, correo });
    // Formatear la fecha a 'DD/MMM/YYYY' usando moment.js
    //const fechaFormateada = publicado ? moment(publicado, 'YYYY-MM-DD').format('DD/MM/YYYY') : null;
    //console.log(fechaFormateada);
    await pool.query('INSERT INTO Clientes (Nombre, Cedula, Telefono , Correo) VALUES ($1, $2, $3, $4) RETURNING *', [nombre, cedula, telefono, correo]);
    res.json({ message: 'Cliente agragado exitosamente' });

    
  } catch (error) {
    console.error('Error inserting libro:', error);
    res.status(500).json({ error: error.message });
  }
});

// Actualizar un cliente
app.put('/api/clientes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, cedula, telefono, correo } = req.body;
    await pool.query('UPDATE Clientes SET nombre = $1, cedula = $2, Telefono = $3, Correo = $4 WHERE id = $5', [nombre, cedula, telefono, correo, id]);
    res.json({ message: 'Libro actualizado exitosamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  
});

// Eliminar un cliente
app.delete('/api/clientes/:id', async (req, res) => {

  try {
    const { id } = req.params;
    
    await pool.query('DELETE FROM clientes WHERE id = $1', [id]);
    
    res.json({ message: 'Libro eliminado exitosamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/Usuarios', async (req, res) => {
  try {
    const result = await pool.query('Select * from usuarios');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/Usuarios/:email', async (req, res) => {
  try {
    const { email } = req.params;
    
    const result = await pool.query('SELECT * FROM Usuarios WHERE email = $1',[email]);

    console.log(result.rows[0].contraseña);
    res.send(result.rows[0].contraseña);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/Usuarios', async (req, res) => {
  try {
    let { Email, Contrasena, Cedula } = req.body;
    console.log({ Email, Contrasena, Cedula });
    

    await pool.query('INSERT INTO Usuarios (Email, Contraseña, Cedula) VALUES ($1, $2, $3) RETURNING *', [Email, Contrasena, Cedula]);
    res.json({ message: 'Cliente agragado exitosamente' });

    
  } catch (error) {
    console.error('Error inserting libro:', error);
    res.status(500).json({ error: error.message });
  }
});
////////////////ventas//////////////////
app.get('/api/ultimafactura', async (req, res) => {
  try {
    const result = await pool.query('SELECT MAX(CAST(id AS INTEGER))+1 AS UltimoNumeroFactura FROM FacturaVenta');

    res.json(result.rows[0].ultimonumerofactura);
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/FacturaVenta', async (req, res) => {
  try {
    const result = await pool.query('Select * from FacturaVenta');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.post('/api/FacturaVenta', async (req, res) => {
  try {
    let { fecha, entregado, ClienteID, total } = req.body;
    console.log({ fecha, entregado, ClienteID, total });
    

    await pool.query('INSERT INTO FacturaVenta (fecha, entregado, ClienteID, total, ventaoingreso) VALUES ($1, $2, $3, $4, $5) RETURNING *', [fecha, entregado, ClienteID, total, 'Venta']);
    res.json({ message: 'Cliente agragado exitosamente' });

    
  } catch (error) {
    console.error('Error inserting libro:', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/Venta', async (req, res) => {
  try {
    const result = await pool.query('Select * from Ventas');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.post('/api/Venta', async (req, res) => {
  try {
    let { TipoDeMuestra, Cantidad, Detalle, Codigo, Costo } = req.body;
    console.log({ TipoDeMuestra, Cantidad, Detalle, Codigo, Costo });
    

    await pool.query('INSERT INTO Ventas (TipoDeMuestra, Cantidad, Detalle, Codigo, Costo, factura) VALUES ($1, $2, $3,$4,$5, (SELECT MAX(CAST(id AS INTEGER)) AS UltimoNumeroFactura FROM FacturaVenta)) RETURNING *', [TipoDeMuestra, Cantidad, Detalle, Codigo, Costo]);
    res.json({ message: 'Cliente agragado exitosamente' });

    
  } catch (error) {
    console.error('Error inserting libro:', error);
    res.status(500).json({ error: error.message });
  }
});
///////////////////ingreso///////////////////////


app.get('/api/Ingreso', async (req, res) => {
  try {
    const result = await pool.query('Select * from ingreso');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.post('/api/Ingreso', async (req, res) => {
  try {
    let {CodigoLaboratorio, IdentificacionDeCampo, AnalisisRequerido} = req.body;
    console.log({ CodigoLaboratorio, IdentificacionDeCampo, AnalisisRequerido });
    

    await pool.query('INSERT INTO ingreso (CodigoLaboratorio, IdentificacionDeCampo, AnalisisRequerido, factura) VALUES ($1, $2, $3, (SELECT MAX(CAST(id AS INTEGER)) AS UltimoNumeroFactura FROM FacturaVenta)) RETURNING *', [CodigoLaboratorio, IdentificacionDeCampo, AnalisisRequerido]);
    res.json({ message: 'Cliente agragado exitosamente' });

    
  } catch (error) {
    console.error('Error inserting libro:', error);
    res.status(500).json({ error: error.message });
  }
});
app.post('/api/FacturaIngreso', async (req, res) => {
  try {
    let { fecha, entregado, ClienteID, total } = req.body;
    console.log({ fecha, entregado, ClienteID, total });
    

    await pool.query('INSERT INTO FacturaVenta (fecha, entregado, ClienteID, total, ventaoingreso) VALUES ($1, $2, $3, $4, $5) RETURNING *', [fecha, entregado, ClienteID, total, 'Ingreso']);
    res.json({ message: 'Cliente agragado exitosamente' });



  } catch (error) {
    console.error('Error inserting libro:', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/FacturaIngreso', async (req, res) => {
  try {
    const result = await pool.query('select facturaventa.id, fecha, entregado, Clientes.nombre as cliente, total, ventaoingreso from public.facturaventa JOIN Clientes ON facturaventa.clienteid = Clientes.ID order by facturaventa.id DESC;;');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/TablaIngreso/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('select ingreso.*, ingreso.codigolaboratorio as codigo  from public.facturaventa join public.ingreso ON public.ingreso.factura = public.facturaventa.ID where facturaventa.id=$1', [id]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/TablaVenta/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('select ventas.codigo,ventas.tipodemuestra, ventas.detalle,  cantidad, costo  from public.facturaventa join public.ventas ON public.ventas.factura = public.facturaventa.ID where facturaventa.id=$1', [id]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

