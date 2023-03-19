const express = require("express");
const router = express.Router();

const productsController = require("../controllers/admin/products.controller");

router.get("/products", productsController.index);

router.get("/products/create", productsController.create);

router.post("/products", productsController.store);

exports.router = router;
