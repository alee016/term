const Order = require('../../models/orderDB');

module.exports = async (req, res) => {
    await Order.findByIdAndDelete(req.params.id);
    res.redirect('/admin/customers');
};
