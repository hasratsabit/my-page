
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/MyPage', (err) => {
  if(err) {
    return console.log(`Database error occurred: ${err}`);
  }

  console.log('Database successfully connected.');
});

module.exports = {
  mongoose
}