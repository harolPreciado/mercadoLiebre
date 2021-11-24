const {productsModel} = require('../model')

const productsController = {
    getProducts: function (req, res) {
        let products=productsModel.products();
        res.render('products', { title: "Productos" , products})
    },
    detail: function (req, res) {
        const id = req.params.id;
        productsModel.detail(id)
        res.render('productDetail', {product, price});
    },
    getCreate: function(req,res) {
		res.render('productCreate')
	},
    create: function (req, res) {
        const file = req.file;
        const body = req.body
        productsModel.create(body, file)
        res.redirect('/products')

    },
    getEdit: function (req, res) {
        const id = req.params.id;
        productsModel.edit(id)
		res.render('productEdit', {productToEdit})
    },
    edit: function (req, res) {
		let id = req.params.id;
        const file = req.file;
        const body = req.body
        productsModel.edit(id, file, body)
		res.redirect(`/products/${id}`)
    },
    delete: function (req, res) {
        let id = req.params.id;
        res.redirect('/products')
    },
}

module.exports = productsController;
