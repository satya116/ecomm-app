const Cart = require('../model/cartSchema');


 const addItemInCart = (request, response) => {
    return response.json("Hello");
}

module.exports = { addItemInCart }