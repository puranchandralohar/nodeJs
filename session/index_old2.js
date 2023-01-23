const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product', (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'> <input type='text' name='title'> <button type='submit'>Send</button></form>"
  );
});

app.use('/product', (req, res) => {
  console.log(req.body);
  req.send("")
  res.redirect('/');
});

app.use('/get-products', (req, res) => {
  res.send('Some products page');
  res.redirect('/');
});

app.use('/login', (req, res) => {
  res.send('some page where u can login');
  res.redirect('/');
});

app.use('/', (req, res) => {
  res.send('home');
});

app.listen(3000);