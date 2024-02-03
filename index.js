const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/my-database');

// Add middleware
app.use(express.json());

// Set up routes
app.get('/', (req, res) => {
  res.send('Hello, world! MEIN PENIS IST GIGANTISCH GROß LOL');
});

app.get('/user', (req, res) => {
    res.send('gib mir den user du hurensohn');
  });

let user_info = {
    name: "asdasd",
    email: "asdasdasd@asdasdas.de",
    password: "lol123456"
}
// Start the server
const port = process.env.DEV_PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  console.log(user_info)
});