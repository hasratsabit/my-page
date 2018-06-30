
const mongoose = require('mongoose');
require('../config/config');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI, (err) => {
    if(err) {
        return console.log(`Database error: ${err}`);
    }
    console.log('Database successfully connected.');
})

module.exports = {
    mongoose
}
