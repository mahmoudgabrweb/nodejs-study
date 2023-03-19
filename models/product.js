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
    constructor(title) {
        this.title = title;
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
}

module.exports = Product;