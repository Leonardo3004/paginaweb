const Muestra = require('../models/Muestra');

class MuestrasController {
    // Get all samples
    async getMuestras(req, res) {
        try {
            const muestras = await Muestra.getAll();
            res.json(muestras);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    // Get one sample
    async getMuestra(req, res) {
        try {
            const id = req.params.id;
            const muestra = await Muestra.getById(id);
            if (muestra) {
                res.json(muestra);
            } else {
                res.status(404).json({ message: 'Sample not found' });
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    // Create one sample
    async createMuestra(req, res) {
        try {
            const nuevaMuestra = await Muestra.create(req.body);
            res.status(201).json(nuevaMuestra);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    // Update one sample
    async updateMuestra(req, res) {
        try {
            const id = req.params.id;
            const updatedMuestra = await Muestra.updateById(id, req.body);
            if (updatedMuestra) {
                res.json(updatedMuestra);
            } else {
                res.status(404).json({ message: 'Sample not found' });
            }
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    // Delete one sample
    async deleteMuestra(req, res) {
        try {
            const id = req.params.id;
            const deletedMuestra = await Muestra.deleteById(id);
            if (deletedMuestra) {
                res.json({ message: 'Sample deleted' });
            } else {
                res.status(404).json({ message: 'Sample not found' });
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}

module.exports = new MuestrasController();