const express = require('express');
const route = express.Router();
const {navController} = require('../controllers'); //Se requieren los controladores agregados en el index de controllers
route.get('/',navController.getHome);


const {userController} = require('../controllers'); //Se requieren los controladores agregados en el index de controllers
route.get('/register', userController.getUsers)
route.post('/register', userController.createUser);
route.get('/updateUser', userController.updateUser)
route.get('/deleteUser', userController.deleteUser)

const {productController} = require('../controllers'); //Se requieren los controladores agregados en el index de controllers
route.get('/products', productController.getProducts)

module.exports = route;