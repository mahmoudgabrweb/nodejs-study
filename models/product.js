const path = require("path");
const fs = require("fs");
const {products} = require("../controllers/products.controller");

const p = path.join(path.dirname(process.mainModule.filename), "data", "products.json");

const readDataFromFile = callback => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            callback([]);
        } else {
            callback(JSON.parse(fileContent));
        }
    });
};

class Product {
    constructor(title, imageUrl, price, description) {
        this.id = Math.random().toString();
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }

    save() {
        readDataFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => console.log({err}));
        });
    }

    static index(callback) {
        readDataFromFile(callback);
    }

    static find(id, callback) {
        readDataFromFile(products => {
            const product = products.find(product => product.id === id);
            callback(product);
        })
    }

    static update(id, data) {
        readDataFromFile(products => {
            const productIndex = products.findIndex(product => product.id === id);
            products[productIndex] = {
                id: id,
                title: data.title,
                imageUrl: data.image_url,
                price: data.price,
                description: data.description,
            };
            fs.writeFile(p, JSON.stringify(products), err => console.log({err}));
        });
    }

    static delete(id) {
        readDataFromFile(products => {
            const updatedProducts = products.filter(product => product.id !== id);
            fs.writeFile(p, JSON.stringify(updatedProducts), err => console.log({err}));
        });
    }
}

module.exports = Product;