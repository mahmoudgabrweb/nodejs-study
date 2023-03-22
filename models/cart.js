const path = require("path");
const fs = require("fs");

const p = path.join(path.dirname(process.mainModule.filename), "data", "cart.json");

class Cart {
    static addToCart(id, price) {
        fs.readFile(p, (err, fileContent) => {
            let cart = {products: [], totalPrice: 0};
            if (!err) {
                cart = JSON.parse(fileContent);
            }
            const existingProductIndex = cart.products.findIndex(product => product.id === id);
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct;
            if (existingProduct) {
                updatedProduct = {...existingProduct};
                updatedProduct.quantity += 1;
                cart.products[existingProductIndex] = updatedProduct;
            } else {
                updatedProduct = {id: id, quantity: 1};
                cart.products = [...cart.products, updatedProduct];
            }
            cart.totalPrice += +price;
            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log({err});
            })
        });
    }
}

module.exports = Cart;