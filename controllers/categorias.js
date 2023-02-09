const { response, request } = require('express');
const bcrypt = require('bcryptjs');
const Categoria = require('../models/categorias');

const getCategoria = async (req = request, res = response) => {

    const listaCategorias = await Promise.all([
        Categoria.countDocuments(),
        Categoria.find()
    ]);

    res.json({
        msg: 'get Api - Controlador Categoria',
        listaCategorias
    });
}

const postCategoria = async (req = request, res = response) => {

    const { nombre, descripcion } = req.body;
    const categoriaGuardadaDB = new Categoria({ nombre, descripcion });

    await categoriaGuardadaDB.save();

    res.json({
        msg: 'Post Api - Post categoria',
        categoriaGuardadaDB
    });
}


const putCategoria = async (req = request, res = response) => {

    const { id } = req.params;
    const { _id, ...resto } = req.body;

    const categoriaEditada = await Categoria.findByIdAndUpdate(id, resto);

    res.json({
        msg: 'PUT editar categoria',
        categoriaEditada
    });
}

const deleteCategoria = async (req = request, res = response) => {
    const { id } = req.params;

    //const categoriaEliminada = await Categoria.findByIdAndDelete(id);
    const categoriaEliminada = await Categoria.findByIdAndUpdate(id, { estado: false });

    res.json({
        msg: 'DELETE eliminar categoria',
        categoriaEliminada
    });
}

module.exports = {
    getCategoria,
    postCategoria,
    putCategoria,
    deleteCategoria
}