
const {nameValidators,
      emailValidators,
      usernameValidators,
      passwordValidators} = require('../validations/userValidations');

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true, validate: nameValidators },
  email: { type: String, require: true, unique: true, validate: emailValidators },
  username: { type: String, required: true, unique: true, validate: usernameValidators },
  password: { type: String, required: true, validate: passwordValidators },
  adminAccess: { type: Boolean, default: true },
  userImage: { type: String }
});


const User = mongoose.model('Users', UserSchema);
module.exports = User;