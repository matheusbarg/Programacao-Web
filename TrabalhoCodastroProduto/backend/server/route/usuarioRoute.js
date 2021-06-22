const express = require('express');
const { func } = require('../database/database');
const router = express.Router();
const usuarioService = require('../service/usuarioService');

router.get('/usuarios',async function(req,res){
    const usuarios = await usuarioService.getUsuarios();
    res.json(usuarios);
});

router.get("/usuario/:id",async function(req,res){
    const usuario = await usuarioService.getUsuario(req.params.id);
    res.json(usuario);
 
});

router.delete('/usuario/:id',async function(req,res){
    const deleteUsuario = await usuarioService.deleteUsuario(req.params.id);
    return res.json([{message:'registro excluido com sucesso'}]); 
   
});

router.put('/usuario',async function(req,res) {
    const usuario = req.body;
    const newUsuario = await usuarioService.saveUsuario(usuario);
    res.json(newUsuario);
});

module.exports =router;