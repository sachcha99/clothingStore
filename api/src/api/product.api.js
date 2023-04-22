const express = require('express');
const router = express.Router();
const ProductController = require('../controller/product.controller');

module.exports = function () {
    router.get('/', ProductController.getAllProducts);
    router.get('/:id', ProductController.getProductById);
    router.post('/create', ProductController.createProduct);
    router.put('/update/:id', ProductController.updateProduct);
    router.delete('/delete/:id', ProductController.deleteProduct);
    router.get('/search/:name', ProductController.searchProduct);
    return router;
}