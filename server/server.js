const express = require('express');
const cors = require('cors');
const path = require('path');
const segurosData = require('./data/seguros.json');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Ruta base
app.get('/', (req, res) => {
  res.send('Servidor de Seguros del Hogar corriendo. Datos en /api/seguros');
});

// Obtener datos completos de seguros
app.get('/api/seguros', (req, res) => {
  res.json(segurosData);
});

// Obtener tipos de propiedad
app.get('/api/propiedades', (req, res) => {
  res.json(segurosData.propiedades);
});

// Obtener ubicaciones
app.get('/api/ubicaciones', (req, res) => {
  res.json(segurosData.ubicaciones);
});

app.use('/data', express.static(path.join(__dirname, 'data')));

app.listen(PORT, () => {
  console.log(`Servidor de Seguros escuchando en http://localhost:${PORT}`);
  console.log(`API Seguros: http://localhost:${PORT}/api/seguros`);
});
