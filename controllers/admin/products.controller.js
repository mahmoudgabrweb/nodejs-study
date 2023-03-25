const Product = require("../../models/product.model");
const {products} = require("../products.controller");

exports.index = (req, res, next) => {
    Product.index(products => {
        res.render("admin/products/index", {pageTitle: "Products", path: "/admin/products", products: products});
    })
};

exports.create = (req, res, next) => {
    res.render("admin/products/create", {pageTitle: "Add New Product", path: "/admin/products/create"});
};

exports.store = (req, res, next) => {
    let title = req.body.title;
    let imageUrl = req.body.image_url;
    let price = req.body.price;
    let description = req.body.description;
    let product = new Product(title, imageUrl, price, description);
    product.save();
    res.redirect("/admin/products");
};

exports.show = (req, res, next) => {
    let id = req.params.id;
    Product.find(id, product => {
        res.end();
    })
};

exports.edit = (req, res, next) => {
    let id = req.params.id;
    Product.find(id, product => {
        res.render("admin/products/edit", {
            pageTitle: "Edit Product",
            path: `/admin/products/${id}/edit`,
            product: product
        });
    })
};

exports.update = (req, res, next) => {
    let id = req.params.id;
    Product.update(id, req.body);
    res.redirect("/admin/products");
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    Product.delete(id);
    res.redirect("/admin/products");
};