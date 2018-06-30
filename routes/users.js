
const express = require('express');
const router = express.Router();

const User = require('../models/user');


router.post('/', async (req, res) => {
  if(!req.body.name) res.status(400).json({ success: false, message: 'Name is required.'});
  if(!req.body.email) res.status(400).json({ success: false, message: 'Email is required.'});
  if(!req.body.username) res.status(400).json({ success: false, message: 'Username is required.'});
  if(!req.body.password) res.status(400).json({ success: false, message: 'Password is required.'});
  else  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    });

    const data = await user.save();
    res.send({ success: true, message: 'Your account has been successfully created.'});
  } catch (err) {
    if(err.code === 11000) {
      res.status(400).send({ success: false, message: 'Username or email already exist.'});
    }else {
      if(err.errors.name) res.status(400).send({ success: false, message: err.errors.name.message });
      if(err.errors.email) res.status(400).send({ success: false, message: err.errors.email.message});
      if(err.errors.username) res.status(400).send({ success: false, message: err.errors.username.message});
      if(err.errors.password) res.status(400).send({ success: false, message: err.errors.password.message});
      else res.status(400).send(err);
    }
  }
});


module.exports = router;