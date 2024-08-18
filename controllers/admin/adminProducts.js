const Product = require('../../models/productDB');

module.exports = async (req, res) => {
    let products = await Product.find({});
    res.render('admin/adminProductsView', { title: "Manage Products", products: products });
};
