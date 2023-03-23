const express = require("express");
const router = express.Router();

const productsController = require("../controllers/admin/products.controller");

router.get("/products", productsController.index);

router.get("/products/create", productsController.create);

router.post("/products", productsController.store);

router.get("/products/:id/edit", productsController.edit);

router.post("/products/:id/update", productsController.update);

router.get("/products/:id/delete", productsController.delete);

router.get("/products/:id", productsController.show);

exports.router = router;
