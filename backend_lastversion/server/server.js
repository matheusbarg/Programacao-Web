const express = require ('express');
const app = express();
const booksRoute = require('./route/booksRoute');

app.use(booksRoute);
app.listen(3334);

