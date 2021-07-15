const express = require ('express');
const app = express();
const cors = require ('cors');
const booksRoute = require('./route/booksRoute');
const clienteRoute = require('./route/clienteRoute');
const editoraRoute = require('./route/editoraRoute');
const assuntoRoute = require('./route/assuntoRoute');
const usuarioRoute = require('./route/usuarioRoute');
const redisClient = require('./database/redis/connection');


app.use(express.json());
app.use(cors());
app.use(booksRoute);
app.use(clienteRoute);
app.use(editoraRoute);
app.use(assuntoRoute);
app.use(usuarioRoute);
app.listen(3334);
redisClient.set("teste", Math.random());
