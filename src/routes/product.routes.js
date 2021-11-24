const express = require('express');
const route = express.Router();
const {productController} = require('../controllers'); //Se requieren los controladores agregados en el index de controllers

const multer = require('multer');
const storage = multer.diskStorage({
	destination : function(req, file, cb) {
		cb(null, path.resolve(__dirname, '../../public/images/products'))
	},
	filename : function(req, file, cb){
		cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
	}
}
);
const uploadFile = multer({ storage });

route.get('/', productController.getProducts)
route.get('/create', productController.getCreate);
route.post('/', uploadFile.single('image'),  productController.create);
route.get('/:id', productController.detail);
route.get('/:id/edit', productController.getEdit);
route.put('/:id',uploadFile.single('image'), productController.edit);
route.delete('/:id', productController.delete);

module.exports = route;