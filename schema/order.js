const mongoose = require('mongoose');

const orderschema = new mongoose.Schema({
    product_ID: { type: String, required: true },
    Name: { type: String, required: true },
    address: { type: String, required: true },
    postal_code: { type: String },
});
const Order = mongoose.model('order', orderschema);
module.exports = Order;