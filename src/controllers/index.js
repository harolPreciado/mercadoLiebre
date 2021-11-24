//Se requieren todos los controladores creados
const navController = require('./nav.controller');
const userController = require('./user.controller');
const productController = require('./product.controller');


// Se exportan los controladores requeridos
module.exports = {
    navController,
    userController,
    productController,
};