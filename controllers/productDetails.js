const ProductDB = require('../models/customerDB');

module.exports = async (req, res) => {
    let product = await Product.findById(req.params.id);
    if (!product) return res.status(404).send("Product not found");
    res.render('productDetailsView', { title: product.name, product: product });
};
