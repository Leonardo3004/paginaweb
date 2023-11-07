const express = require('express');
const muestrasController = require('../controllers/muestrasController.js');
const router = express.Router();

// Instantiate MuestrasController

router.post('/', async (req, res) => {
    const { Fecha_Recogida, Ubicación, ID_Usuario } = req.body;
    const response = await muestrasController.createMuestra(Fecha_Recogida, Ubicación, ID_Usuario);
    res.status(response.status).json(response.data);
});

router.get('/', async (req, res) => {
    const response = await muestrasController.getMuestras();
    res.status(response.status).json(response.data);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const response = await muestrasController.getMuestra(id);
    res.status(response.status).json(response.data);
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { Fecha_Recogida, Ubicación, ID_Usuario } = req.body;
    const response = await muestrasController.updateMuestra(id, Fecha_Recogida, Ubicación, ID_Usuario);
    res.status(response.status).json(response.data);
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const response = await muestrasController.deleteMuestra(id);
    res.status(response.status).json(response.data);
});

module.exports = router;