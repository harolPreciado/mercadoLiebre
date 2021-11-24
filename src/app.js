const express=require('express');
const path = require('path');
//const midd = require('./middleware') 
const app = express();
app.use(express.static(path.join(__dirname, '../public')));

app.use(express.urlencoded({extended:false}));
app.use(express.json());

//app.use(midd.listarUrl)  //Middelware creado para listar las URL visitadas
app.use('/', require('./routes'))

// Configuración EJS View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

module.exports = app;