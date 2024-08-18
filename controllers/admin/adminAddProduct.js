const Product = require('../../models/productDB');
module.exports = async (req, res) => {
    let newProduct = new Product({
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        sizes: req.body.sizes 
    });

    await newProduct.save();
    res.redirect('/admin/products');
};
