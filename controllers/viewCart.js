const Product = require('../models/productDB.js');
const Customer = require('../models/customerDB.js');

module.exports = async (req, res) => {
    try {
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
    } catch (error) {
        console.error("Error fetching cart details:", error);
        res.status(500).send("Internal Server Error");
    }
};