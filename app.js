
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');




// ==========================================================
// 		 									MIDDLEWARES
// ==========================================================
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/my-app/dist'));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
})