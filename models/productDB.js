const mongoose = require('mongoose');
const credentials = require('../credentials');

const dbUrl = 'mongodb+srv://' + credentials.username + 
    ':' + credentials.password + '@' + credentials.host + '/' + credentials.database;

let connection = null;
let model = null;

const Schema = mongoose.Schema;

let productSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    sizes: [{
        size: { type: String, required: true },
        quantity: { type: Number, required: true }
    }]
}, {
    collection: 'products'
});

module.exports = {
    getModel: () => {
        if (connection == null) {
            console.log("Creating connection and model...");
            connection = mongoose.createConnection(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
            model = connection.model('ProductModel', productSchema);
        }
        return model;
    }
};
