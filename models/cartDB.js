const mongoose = require('mongoose');
const credentials = require('../credentials');

const cartSchema = new mongoose.Schema({
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    items: [{
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true }
    }]
}, {
    collection: 'carts'
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
