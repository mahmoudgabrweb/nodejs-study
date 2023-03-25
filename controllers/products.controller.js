const Product = require("../models/product.model");
const Cart = require("../models/cart");

exports.index = (req, res, next) => {
    Product.index(products => {
        res.render("front/index", {pageTitle: "Shop", products: products, path: "/"});
    });
};

exports.products = (req, res, next) => {
    Product.index(products => {
        res.render("front/products", {pageTitle: "Shop", products: products, path: "/products"});
    });
};

exports.details = (req, res, next) => {
    Product.find(req.params.id, product => {
        res.render("front/product-details", {pageTitle: product.title, product: product, path: "/product-details"});
    });
};

exports.cart = (req, res, next) => {
    res.render("front/cart", {pageTitle: "Cart", path: "/cart"});
};

exports.saveCart = (req, res, next) => {
    let productId = req.body.product_id;
    Product.find(productId, product => {
        Cart.addToCart(productId, product.price);
    });
    res.redirect("/cart");
}