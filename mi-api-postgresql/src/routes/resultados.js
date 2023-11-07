const express = require('express');
const router = express.Router();
const resultadosController = require('../controllers/resultadosController');


router.get('/', async (req, res) => {
    const resultados = await resultadosController.getAll();
    res.json(resultados);
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const resultado = await resultadosController.getById(id);
    res.json(resultado);
});

router.post('/', async (req, res) => {
    const newResultado = req.body;
    const createdResultado = await resultadosController.create(newResultado);
    res.json(createdResultado);
});

router.put('/:id', async (req, res) => {
    const updatedResultado = req.body;
    const id = req.params.id;
    await resultadosController.update(id, updatedResultado);
    res.json({ message: 'Resultado updated successfully' });
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await resultadosController.delete(id);
    res.json({ message: 'Resultado deleted successfully' });
});

module.exports = router;