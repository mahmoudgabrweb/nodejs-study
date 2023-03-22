const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products.controller");

router.get("/", productsController.index);

router.get("/products", productsController.products);

router.get("/product-details/:id", productsController.details);

router.get("/cart", productsController.cart);

router.post("/cart", productsController.saveCart);

module.exports = router;