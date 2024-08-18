const mongoose = require('mongoose');
const credentials = require('../credentials.js');

const dbUrl = `mongodb+srv://${credentials.username}:${credentials.password}@${credentials.host}/${credentials.database}`;

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;

// Cart schema definition
const cartSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'Customer', required: true }, // Reference to the customer
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true }, // Reference to the product
    size: { type: String, required: true },
    quantity: { type: Number, required: true }
}, { collection: 'cart' });

const Cart = mongoose.model('Cart', cartSchema);

module.exports = {
    getModel: () => Cart
};
