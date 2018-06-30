
const mongoose = require('mongoose');
require('../config/config');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Database is connected.");
  }).catch((err) => console.log(err))

