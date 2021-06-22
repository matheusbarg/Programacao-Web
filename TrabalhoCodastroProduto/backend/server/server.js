const express = require ('express');
const app = express();
const cors = require ('cors');
const usuarioRoute = require('./route/usuarioRoute');
const produtoRoute = require('./route/produtoRoute');


app.use(express.json());
app.use(cors());
app.use(usuarioRoute);
app.use(produtoRoute);
app.listen(3334);

