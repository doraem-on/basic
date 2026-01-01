import express from 'express';

import { createProduct , getProducts, updatedProduct , deleteProduct } from '../controllers/product.controller.js';

const router = express.Router();

export default router;

// Get all products
router.get('/', getProducts);
router.post('/', createProduct);
router.put('/:id', updatedProduct);
router.delete('/:id', deleteProduct);