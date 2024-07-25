const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.get('/', clienteController.getAllClientes);
router.get('/novo', clienteController.createCliente);
router.post('/novo', clienteController.postCreateCliente);
router.get('/editar/:id', clienteController.getCliente);
router.post('/editar/:id', clienteController.updateCliente);
router.post('/deletar/:id', clienteController.deleteCliente);

module.exports = router;