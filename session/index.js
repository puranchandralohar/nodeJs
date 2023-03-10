const express = require('express');
const bodyParser = require('body-parser');

const productRoutes = require('./routes/product');

const auth = require('./routes/auth')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(productRoutes);
app.use(auth)

app.listen(3000);