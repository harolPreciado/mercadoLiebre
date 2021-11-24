const express = require('express');
const route = express.Router();
const {userController} = require('../controllers'); //Se requieren los controladores agregados en el index de controllers

route.get('/register', userController.getUsers)
route.post('/register', userController.createUser);

module.exports = route;