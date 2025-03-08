import express from "express";

import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

// GET - Fetch all products
router.get("/", getProducts);
// POST - Create a new product
router.post("/", createProduct);
// PUT - Update an existing product
router.put("/:id", updateProduct);
// DELETE - Delete a product
router.delete("/:id", deleteProduct);

export default router;