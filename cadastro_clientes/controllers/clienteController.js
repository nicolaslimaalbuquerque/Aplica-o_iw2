const Cliente = require('../models/clienteModel');

exports.getAllClientes = async (req, res) => {
    const clientes = await Cliente.fetchAll();
    res.render('clientes/index', { clientes });
};

exports.getCliente = async (req, res) => {
    const cliente = await Cliente.findById(req.params.id);
    res.render('clientes/editar', { cliente });
};

exports.createCliente = async (req, res) => {
    res.render('clientes/novo');
};

exports.postCreateCliente = async (req, res) => {
    await Cliente.save(req.body);
    res.redirect('/clientes');
};

exports.updateCliente = async (req, res) => {
    await Cliente.update(req.params.id, req.body);
    res.redirect('/clientes');
};

exports.deleteCliente = async (req, res) => {
    await Cliente.delete(req.params.id);
    res.redirect('/clientes');
};