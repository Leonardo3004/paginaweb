const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');


router.get('/', (req, res) => {
    usuariosController.getUsuarios(req, res);
});

router.get('/:id', (req, res) => {
    usuariosController.getUsuario(req, res);
});

router.post('/', (req, res) => {
    usuariosController.createUsuario(req, res);
});

router.put('/:id', (req, res) => {
    usuariosController.updateUsuario(req, res);
});

router.delete('/:id', (req, res) => {
    usuariosController.deleteUsuario(req, res);
});

module.exports = router;