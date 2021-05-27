const express = require ('express');
const app = express();
const booksRoute = require('./route/booksRoute');
const clienteRoute = require('./route/clienteRoute');
const editoraRoute = require('./route/editoraRoute');
const assuntoRoute = require('./route/assuntoRoute');


app.use(express.json());
app.use(booksRoute);
app.use(clienteRoute);
app.use(editoraRoute);
app.use(assuntoRoute);
app.listen(3334);

