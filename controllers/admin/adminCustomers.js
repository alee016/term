const Customer = require('../../models/customerDB'); 

module.exports = async (req, res) => {
    try {
        let customers = await Customer.find({});
        res.render('admin/adminCustomersView', { title: "Manage Customers", customers: customers });
    } catch (error) {
        console.error("Error fetching customers:", error);
        res.status(500).send("Internal Server Error");
    }
};
