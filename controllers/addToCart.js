const Product = require('../models/productDB');

module.exports = async (req, res) => {
    let cart = req.session.cart || [];
    let cartDetails = await Promise.all(cart.map(async item => {
        let product = await Product.findById(item.productId);
        return {
            name: product.name,
            image: product.image,
            size: item.size,
            quantity: item.quantity,
            price: product.price,
            total: product.price * item.quantity
        };
    }));
    res.render('viewCartView', { title: "Your Cart", cart: cartDetails });
};
