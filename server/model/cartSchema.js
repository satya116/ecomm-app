const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user: {
        username: String,
        // ref: 'user',
        // required: true
    },
    cartItems: [
        {
            product: {
                id: String,
                // required: true,
                // ref: 'Product'
            },
            quantity: {
                type: Number,
                default: 1
            },
            price: {
                price: Number,
                // required: true
            }
        }
    ]
});

module.exports = mongoose.model('Cart', cartSchema);

