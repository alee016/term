const Product = require('../../models/productDB');

module.exports = async (req, res) => {
    let product = await Product.findById(req.params.id);
    if (!product) return res.status(404).send("Product not found");

    product.name = req.body.name;
    product.image = req.body.image;
    product.price = req.body.price;
    product.sizes = req.body.sizes;

    await product.save();
    res.redirect('/admin/products');
};
