//usuarioController.js

var usuario = require('../model/usuarioModel');

exports.Agregar = function(req,res){

	var myUser = new usuario();

	myUser.email = req.body.email;
	myUser.nombres = req.body.nombres;
	myUser.apellidos = req.body.apellidos;

	myUser.save(function(err){
		if(err){
			res.status(500).json({mensaje: 'Error al registrar el usuario'});
		}else{
			res.status(200).json({mensaje: 'Usuario creado correctamente'});
		}
	});
};

exports.Listar = function(req,res){

	usuario.find(function(err,data){

		if(err){
			res.status(500).json({mensaje:'Error al listar los usuarios'});
		}else{
			res.status(200).json(data);
		}
	});
};