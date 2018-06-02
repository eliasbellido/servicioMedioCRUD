//usuarioModel.js

var mongoose = require('mongoose');

//creando el esquema para la colección de usuarios
var usuarioEsquema = mongoose.Schema({
	email:{type:String, unique:true},
	nombres:String,
	apellidos:String
});

module.exports = mongoose.model('usuarios',usuarioEsquema);