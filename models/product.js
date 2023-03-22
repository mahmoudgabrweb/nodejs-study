const path = require("path");
const fs = require("fs");

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
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log({err})
            });
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
}

module.exports = Product;