const Product = require("../models/product");

exports.index = (req, res, next) => {
    Product.index((products) => {
        res.render("front/index", {pageTitle: "Shop", products: products, path: "/"});
    });
}

exports.products = (req, res, next) => {
    Product.index((products) => {
        res.render("front/products", {pageTitle: "Shop", products: products, path: "/products"});
    });
}

exports.cart = (req, res, next) => {
    res.render("front/cart", {pageTitle: "Cart", path: "/cart"});
};