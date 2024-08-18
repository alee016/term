const Order = require('../models/orderDB');

module.exports = async (req, res) => {
    let orders = await Order.find({ customer: req.user._id }).populate('items.product');
    res.render('viewOrdersView', { title: "Your Orders", orders: orders });
};
