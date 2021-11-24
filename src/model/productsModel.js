const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, './products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const newId = () => {
	let ultimo = 0;
	products.forEach(product => {
		if (product.id > ultimo){
			ultimo = product.id;
		}
	});
	return ultimo + 1
}

const productModel = {
	products: function(){
		return products;
	},
	detail: function(id) {
		let product = products.filter(product => product.id == id)[0];
		let price = {
			full : toThousand(product.price),
			discount: toThousand(Math.round(product.price * (1 - product.discount / 100)))
		}
	},
	create: function(body, file){
		let id = newId();
		let product = {}
		if(!file){
			product = {
				id: id,
				...body,
				image: 'default-image.png'
			}	
		} else {
			product = {
				id: id,
				...body,
				image: file.filename
			}
		}
		products.push(product);
		let jsonProducts = JSON.stringify(products, null, 4);
		fs.writeFileSync(productsFilePath, jsonProducts)		
	},
	edit: function(id, file, body){
		let productToEdit = products.filter(product => product.id == id)[0];
		let productsUpdated = products.filter(product => product.id != id)
		let imageNew = productToEdit.image
		if(file){
			imageNew = file.filename;
		}
		let product = {
			id : productToEdit.id,
			...body,
			image: imageNew
		}
		productsUpdated.push(product)
		let jsonProducts = JSON.stringify(productsUpdated, null, 4);
		fs.writeFileSync(productsFilePath, jsonProducts)
	},
	delete : function(id){
		let productsUpdated = products.filter(product => product.id != id)
		let jsonProducts = JSON.stringify(productsUpdated, null, 4);
		fs.writeFileSync(productsFilePath, jsonProducts)
	}
};

module.exports = productModel;