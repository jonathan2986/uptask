const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

//crear la conexion a la base de datos
const db = require('./config/db');
//importar el modelo
require('./models/Proyectos');

db.sync()
    .then(()=> console.log('conectado al servidor'))
    .catch(error => console.log(error));

//crear una app de express
const app = express();

//Donde cargar los archivos estaticos
app.use(express.static('public'));
//habilitar pug
app.set('view engine', 'pug');
//añadir la carpeta de las vista
app.set('views',path.join(__dirname, './views'));

//habilitar bodyparser para leer datos del formulario
app.use(bodyParser.urlencoded({extended: true}));
app.use('/',routes());
//ruta para el home

app.listen(3000);