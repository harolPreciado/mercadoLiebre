const express = require('express')
const route = express.Router();

route.use('/', require('./nav.routes'))
route.use('/register', require('./user.routes'))
route.use('/products', require('./product.routes'))

module.exports = route;