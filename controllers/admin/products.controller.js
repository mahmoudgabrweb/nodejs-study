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
    let title = req.body.title;
    let imageUrl = req.body.image_url;
    let price = req.body.price;
    let description = req.body.description;
    let product = new Product(title, imageUrl, price, description);
    product.save();
    res.redirect("/admin/products");
};