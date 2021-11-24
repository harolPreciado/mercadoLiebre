const fs = require('fs');
const path = require('path');
const model = require('../model')

const productsFilePath = path.join(__dirname, '../model/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const navController = {

    getHome: (req,res) => {
        const insale = products.filter(product => product.category == 'in-sale');
		const visited = products.filter(product => product.category == 'visited');
		res.render('index', { insale, visited, title: "Home"});
    },
    search: (req, res) => {
		// Do the magic
	},
}

module.exports = navController;