const Usuario = require('../models/Usuario');

class UsuariosController {
    // Get all users
    static async getUsuarios(req, res) {
        try {
            const usuarios = await Usuario.getAll();
            res.status(200).json(usuarios);
        } catch (error) {
            res.status(500).json({ error: error.toString() });
        }
    }

    // Get a user by ID
    static async getById(req, res) {
        const id = parseInt(req.params.id);
        try {
            const usuario = await Usuario.getById(id);
            if (!usuario) {
                res.status(404).json({ error: 'User not found' });
            } else {
                res.status(200).json(usuario);
            }
        } catch (error) {
            res.status(500).json({ error: error.toString() });
        }
    }

    // Create a new user
    static async create(req, res) {
        try {
            const usuario = await Usuario.create(req.body);
            res.status(201).json(usuario);
        } catch (error) {
            res.status(500).json({ error: error.toString() });
        }
    }

    // Update a user
    static async update(req, res) {
        const id = parseInt(req.params.id);
        try {
            const updatedUsuario = await Usuario.update(id, req.body);
            if (!updatedUsuario) {
                res.status(404).json({ error: 'User not found' });
            } else {
                res.status(200).json(updatedUsuario);
            }
        } catch (error) {
            res.status(500).json({ error: error.toString() });
        }
    }

    // Delete a user
    static async delete(req, res) {
        const id = parseInt(req.params.id);
        try {
            const deletedUsuario = await Usuario.delete(id);
            if (!deletedUsuario) {
                res.status(404).json({ error: 'User not found' });
            } else {
                res.status(200).json(deletedUsuario);
            }
        } catch (error) {
            res.status(500).json({ error: error.toString() });
        }
    }
}

module.exports = UsuariosController;
