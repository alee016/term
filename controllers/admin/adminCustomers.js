const CustomerDB = require('../../models/customerDB');

module.exports = async (req, res) => {
    let customers = await Customer.find({});
    res.render('admin/adminCustomersView', { title: "Manage Customers", customers: customers });
};
