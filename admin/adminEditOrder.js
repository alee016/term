const Order = require('../../models/orderDB');

module.exports = async (req, res) => {
    let order = await Order.findById(req.params.id);
    if (!order) return res.status(404).send("Order not found");

    order.items = req.body.items; 

    await order.save();
    res.redirect('/admin/customers');
};
