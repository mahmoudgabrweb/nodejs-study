const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products.controller");

router.get("/", productsController.index);

router.get("/products", productsController.products);

router.get("/cart", productsController.cart);

module.exports = router;