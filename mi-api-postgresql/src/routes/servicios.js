const express = require('express');
const router = express.Router();
const serviciosController = require('../controllers/serviciosController');


router.get('/', async (req, res) => {
    try {
        const servicios = await serviciosController.getAll();
        res.json(servicios);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const servicio = await serviciosController.getById(req.params.id);
        if (servicio == null) {
            return res.status(404).json({ message: 'Cannot find servicio' });
        }
        res.json(servicio);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const servicio = await serviciosController.create(req.body);
        res.status(201).json(servicio);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const servicio = await serviciosController.update(req.params.id, req.body);
        if (servicio == null) {
            return res.status(404).json({ message: 'Cannot find servicio' });
        }
        res.json(servicio);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await serviciosController.delete(req.params.id);
        res.json({ message: 'Deleted servicio' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;