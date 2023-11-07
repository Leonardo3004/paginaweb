const Servicio = require('../models/Servicio');

class ServiciosController {
    // Get all services
    async getAll(req, res) {
        try {
            const servicios = await Servicio.getAll();
            res.json(servicios);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    // Get one service
    async getOne(req, res) {
        try {
            const servicio = await Servicio.getOne(req.params.id);
            if (servicio == null) {
                return res.status(404).json({ message: 'Cannot find service' });
            }
            res.json(servicio);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    // Create one service
    async create(req, res) {
        try {
            const servicio = new Servicio(req.body);
            const newServicio = await servicio.save();
            res.status(201).json(newServicio);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    // Update one service
    async update(req, res) {
        try {
            const servicio = await Servicio.update(req.params.id, req.body);
            if (servicio == null) {
                return res.status(404).json({ message: 'Cannot find service' });
            }
            res.json(servicio);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    // Delete one service
    async delete(req, res) {
        try {
            const servicio = await Servicio.delete(req.params.id);
            if (servicio == null) {
                return res.status(404).json({ message: 'Cannot find service' });
            }
            res.json({ message: 'Service has been deleted' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}

module.exports = new ServiciosController();