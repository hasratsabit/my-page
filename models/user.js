const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const {nameValidators,
      emailValidators,
      usernameValidators,
      passwordValidators} = require('../validations/userValidations');



const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true, validate: nameValidators },
  email: { type: String, require: true, unique: true, validate: emailValidators },
  username: { type: String, required: true, unique: true, validate: usernameValidators },
  password: { type: String, required: true, validate: passwordValidators },
  adminAccess: { type: Boolean, default: true },
  userImage: { type: String }
});


// Hashing Password: We use regular function for 'this' support.
UserSchema.pre('save', function(next) {
  let user = this;
   if(user.isModified('password')) {
     bcrypt.genSalt(10, (err, salt) => {
       if(err) return next(err);
       bcryptPassword(salt);
     })
 
     const bcryptPassword = (salt) => {
       bcrypt.hash(user.password, salt, (err, hash) => {
         if(err) return next(err);
         user.password = hash;
         next();
       })
     }
   }else {
     return next();
   }
 })


const User = mongoose.model('Users', UserSchema);
module.exports = User;