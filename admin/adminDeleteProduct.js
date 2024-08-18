const Product = require('../../models/productDB');

module.exports = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/admin/products');
};
