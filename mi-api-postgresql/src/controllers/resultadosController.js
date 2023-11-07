const Resultado = require('../models/Resultado');

class ResultadosController {
    // Get all resultados
    async getAll(req, res) {
        try {
            const resultados = await Resultado.getAll();
            res.json(resultados);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    // Get one resultado
    async getOne(req, res) {
        try {
            const resultado = await Resultado.getOne(req.params.id);
            if (resultado == null) {
                return res.status(404).json({ message: 'Cannot find resultado' });
            }
            res.json(resultado);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    // Create one resultado
    async create(req, res) {
        try {
            const resultado = new Resultado(req.body);
            const newResultado = await resultado.save();
            res.status(201).json(newResultado);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    // Update one resultado
    async update(req, res) {
        try {
            const resultado = await Resultado.getOne(req.params.id);
            if (resultado == null) {
                return res.status(404).json({ message: 'Cannot find resultado' });
            }

            Object.assign(resultado, req.body);
            const updatedResultado = await resultado.save();
            res.json(updatedResultado);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    // Delete one resultado
    async delete(req, res) {
        try {
            const resultado = await Resultado.getOne(req.params.id);
            if (resultado == null) {
                return res.status(404).json({ message: 'Cannot find resultado' });
            }

            await resultado.delete();
            res.json({ message: 'Resultado has been deleted' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}

module.exports = new ResultadosController();