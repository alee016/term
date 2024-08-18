const ProductDB = require('../models/productDB');

module.exports = async (req, res) => {
    let products = await Product.find({});
    res.render('displayProductsView', { title: "Available Products", products: products });
};
