const mongoose = require('mongoose');
const credentials = require('../credentials.js');

const dbUrl = `mongodb+srv://${credentials.username}:${credentials.password}@${credentials.host}/${credentials.database}`;

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;

// Order schema definition
const orderSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'Customer', required: true }, // Reference to the customer
    items: [{
        productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true }, // Reference to the product
        size: { type: String, required: true },
        quantity: { type: Number, required: true }
    }],
    status: { type: String, enum: ['Pending', 'Completed', 'Cancelled'], default: 'Pending' },
    createdAt: { type: Date, default: Date.now }
}, { collection: 'orders' });

const Order = mongoose.model('Order', orderSchema);

module.exports = {
    getModel: () => Order
};
