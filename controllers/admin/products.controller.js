const Product = require("../../models/product");

exports.index = (req, res, next) => {
    Product.index(products => {
        res.render("admin/products/index", {pageTitle: "Products", path: "/admin/products", products: products});
    })
};

exports.create = (req, res, next) => {
    res.render("admin/products/create", {pageTitle: "Add New Product", path: "/admin/products/create"});
};

exports.store = (req, res, next) => {
    let product = new Product(req.body.title);
    product.save();
    res.redirect("/admin/products");
};