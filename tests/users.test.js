
const expect = require('expect');
const request = require('supertest');
const app = require('../app');
const User = require('../models/user');
const {usersList} = require('./seed/user_seed');


beforeEach((done) => {
  User.remove({}).then(() => done())
})

/*************************************
        POST User
*************************************/
describe('POST /users', () => {
  
  // Test for empty value
  it("Should return 404 and falsy for empty value.", (done) => {
    request(app)
      .post('/users')
      .send({})
      .expect(404)
      .expect((res) => {
        expect(res.body.success).toBeFalsy();
      })
      .end(done)
  });

  // Test for valid name
  it("Should return 404 for invalid name." , (done) => {
    request(app)
      .post('/users')
      .send({
        name: "Chris Doe ><><>", // Invalid name
        email: "chris@gmail.com",
        username: "chrisdoe",
        password: "Lima!@12"
      })
      .expect(404)
      .expect((res) => {
        expect(res.body.success).toBeFalsy();
      })
      .end(done)
  });

  // Test for valid email
  it("Should return 404 for invalid email." , (done) => {
    request(app)
      .post('/users')
      .send({
        name: "Chris Doe",
        email: "chris.gmail.com", // Invalid email
        username: "chrisdoe",
        password: "Lima!@12"
      })
      .expect(404)
      .expect((res) => {
        expect(res.body.success).toBeFalsy();
      })
      .end(done)
  });


  // Test for valid username
  it("Should return 404 for invalid username." , (done) => {
    request(app)
      .post('/users')
      .send({
        name: "Chris Doe",
        email: "chris@gmail.com", 
        username: "chrisdoe<><><><>?", // invalid username
        password: "Lima!@12"
      })
      .expect(404)
      .expect((res) => {
        expect(res.body.success).toBeFalsy();
      })
      .end(done)
  });

  // Test for username length
  it("Should return 404 for too long or too short username." , (done) => {
    request(app)
      .post('/users')
      .send({
        name: "Chris Doe",
        email: "chris@gmail.com", 
        username: "chrisdoedfklsdfjkdslfjdslfdsjlfdsl", // Long username
        password: "Lima!@12"
      })
      .expect(404)
      .expect((res) => {
        expect(res.body.success).toBeFalsy();
      })
      .end(done)
  });


  // Test for invalid password
  it("Should return 404 for invalid password." , (done) => {
    request(app)
      .post('/users')
      .send({
        name: "Chris Doe",
        email: "chris@gmail.com", 
        username: "chrisdoe",
        password: "1234" // Password must contain at least 1 lowercase, 1 uppercase, 1 number, and 1 special character
      })
      .expect(404)
      .expect((res) => {
        expect(res.body.success).toBeFalsy();
      })
      .end(done)
  });

  // Test for password length
  it("Should return 404 for too short or too long password." , (done) => {
    request(app)
      .post('/users')
      .send({
        name: "Chris Doe",
        email: "chris@gmail.com", 
        username: "chrisdoe",
        password: "sldfjdsklfjdslkfjsdfkldsfjsdlkfdsljfjdslkfjdslkfjdsklfjdlksf" // Password must be at least 8 characters but not longer than 30
      })
      .expect(404)
      .expect((res) => {
        expect(res.body.success).toBeFalsy();
      })
      .end(done)
  });

  // Test for password length
  it("Should create new user and return 200." , (done) => {
    request(app)
      .post('/users')
      .send({
        name: "Chris Doe",
        email: "chris@gmail.com", 
        username: "chrisdoe",
        password: "Lima!@12" // Password must be at least 8 characters but not longer than 30
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.success).toBeTruthy();
      })
      .end(done)
  });
  

});



/*************************************
        GET User
*************************************/