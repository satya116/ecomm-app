const mongoose = require('mongoose');

const Connection = () => {
    const URL = process.env.DB_URL
    try {
        mongoose.set('useCreateIndex', true);
        mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('DB Error: ', error.message);
    }
};

module.exports = Connection;