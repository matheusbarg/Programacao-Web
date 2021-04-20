const express = require('express');
const { func } = require('../database/database');
const router = express.Router();
const editoraService = require('../service/editoraService');

router.get('/editoras',async function(req,res){
    const editoras = await editoraService.getEditoras();
    res.json(editoras);
});

router.get("/editora/:id",async function(req,res){
    const editora = await editoraService.getEditora(req.params.id);
    res.json(editora);
 
});

router.delete('/editora/:id',async function(req,res){
   return res.json([{message:'registro excluido com sucesso'}]); 
});

router.put('/editora',async function(req,res) {
    const editora = req.body;
    const newEditora = await editoraService.saveEditora(editora);
    res.json(newEditora);
});

module.exports =router;