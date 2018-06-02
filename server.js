//server.js

//referenciando las librerias

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser'); //ojo poner el nombre real de la librería

var config = require('./config');
var myController = require('./controller/usuarioController');

//conectando a la BD
mongoose.connect(config.cadenaConexion,function(err){

	if(err){
		console.log('Error al conectar a la BD');
	}else{
		console.log('Conexión exitosa!!!');
	}
});

//configurando la aplicación con express
var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

//configurando el ruteo
var router = express.Router();
router.route('/usuarios')
.get(myController.Listar)
.post(myController.Agregar);

app.use('/api',router);
app.listen(3000);
