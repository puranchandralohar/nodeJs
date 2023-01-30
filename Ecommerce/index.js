const express = require('express');
const productRoutes = require('./routes/product');
const app = express();
app.use(productRoutes);
app.use('/', (req, res, next) => {
  res.sendFile(__dirname + '/views/home.html');
});
app.listen(3000);