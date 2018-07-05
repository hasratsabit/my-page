
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const mongoose = require('./db/mongoose');

const mainRoute = require('./routes/index');



// ==========================================================
// 		 									MIDDLEWARES
// ==========================================================
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET, OPTIONS");
    return res.status(200).json({});
  }
  next();
  });

app.use('/', mainRoute);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});


const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

module.exports = app;