const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products.controller");

router.get("/add-product", productsController.create);

router.post("/add-product", productsController.store);

exports.router = router;
