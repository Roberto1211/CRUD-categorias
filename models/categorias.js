const { Schema, model } = require('mongoose');

const CategoriasSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    descripcion: {
        type: String
    },
    estado: {
        type: Boolean,
        default: true
    }
});

module.exports = model('Categorias', CategoriasSchema);