const express = require('express');
const { func } = require('../database/database');
const router = express.Router();
const assuntoService = require('../service/assuntoService');

router.get('/assuntos',async function(req,res){
    const assuntos = await assuntoService.getAssuntos();
    res.json(assuntos);
});

router.get("/assunto/:id",async function(req,res){
    const assunto = await assuntoService.getAssunto(req.params.id);
    res.json(assunto);
 
});

router.delete('/assunto/:id',async function(req,res){
   return res.json([{message:'registro excluido com sucesso'}]); 
});

router.put('/assunto',async function(req,res) {
    const assunto = req.body;
    const newAssunto = await assuntoService.saveAssunto(book);
    res.json(newAssunto);
});

module.exports =router;