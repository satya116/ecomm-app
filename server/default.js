
const Product = require('./model/productSchema');
const { products } = require('./constants/product');

const DefaultData = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(products);

        console.log('Data imported Successfully');

    } catch (error) {
        console.log('Error: ', error.message);
    }
}

module.exports = DefaultData;