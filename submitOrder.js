const Order = require('../models/orderDB.js');
const Product = require('../models/productDB.js');

module.exports = async (req, res) => {
    let cart = req.session.cart || [];
    
    if (cart.length === 0) {
        return res.redirect('/cart');
    }

    let orderItems = [];
    
    for (let item of cart) {
        let product = await Product.findById(item.productId);
        let sizeInfo = product.sizes.find(size => size.size === item.size);
        
        if (sizeInfo.quantity < item.quantity) {
            return res.status(400).send("Insufficient quantity available");
        }
        
        sizeInfo.quantity -= item.quantity;
        await product.save();

        orderItems.push({
            product: item.productId,
            size: item.size,
            quantity: item.quantity
        });
    }
    
    let newOrder = new Order({
        customer: req.user._id,
        items: orderItems
    });

    await newOrder.save();
    req.session.cart = [];
    res.redirect('/orders');
};
