const Product = require("../models/product");

exports.index = (req, res, next) => {
    Product.index((products) => {
        res.render("shop", {pageTitle: "Shop", products: products, path: "/"});
    });
}

exports.create = (req, res, next) => {
    res.render("add-product", {pageTitle: "Add new product", path: "/admin/add-product"});
};

exports.store = (req, res, next) => {
    let product = new Product(req.body.title);
    product.save();
    res.redirect("/");
};