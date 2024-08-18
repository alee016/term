var express = require('express');
var router = express.Router();

// Customer routes
var displayProducts = require("../controllers/displayProducts")
var productDetails = require("../controllers/productDetails");
var addToCart = require('../controllers/addToCart');
var viewCart = require('../controllers/viewCart');
var submitOrder = require('../controllers/submitOrder');
var viewOrders = require('../controllers/viewOrders');

// Admin routes
var adminProducts = require('../controllers/admin/adminProducts');
var adminAddProduct = require('../controllers/admin/adminAddProduct');
var adminEditProduct = require('../controllers/admin/adminEditProduct');
var adminDeleteProduct = require('../controllers/admin/adminDeleteProduct');
var adminCustomers = require('../controllers/admin/adminCustomers');
var adminEditOrder = require('../controllers/admin/adminEditOrder');
var adminDeleteOrder = require('../controllers/admin/adminDeleteOrder');

// Customer routes
router.get('/product', displayProducts);
router.get('/product/:id', productDetails);
router.post('/cart/add', addToCart);
router.get('/cart', viewCart);
router.post('/order/submit', submitOrder);
router.get('/order', viewOrders);

// Admin routes
router.get('/admin/products', adminProducts);
router.post('/admin/products/add', adminAddProduct);
router.post('/admin/products/edit/:id', adminEditProduct);
router.post('/admin/products/delete/:id', adminDeleteProduct);
router.get('/admin/customers', adminCustomers);
router.post('/admin/orders/edit/:id', adminEditOrder);
router.post('/admin/orders/delete/:id', adminDeleteOrder);

module.exports = router;
