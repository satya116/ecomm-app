
const { getProductById, getProducts } = require('../controller/product-controller');
const { userSignUp, userLogIn } = require('../controller/user-controller');
const { addItemInCart } = require('../controller/cart-controller');

const router = require('express').Router()

//login & signup
router.post('/signup', userSignUp);
router.post('/login', userLogIn);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);

router.post('/cart/add', addItemInCart);

module.exports = router