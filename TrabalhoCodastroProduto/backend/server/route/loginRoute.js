const express = require('express');
const { func } = require('../database/database');
const router = express.Router();
const loginService = require('../service/loginService');

router.put('/login', async function(req, res) {
   
    const user = req.body;
    const userConnect = await loginService.auten(user);

    if (userConnect!= "") {
       res.json(userConnect)
      
    } else {
       console.log("Não conecta")
       res.status(404).send("Usuario não encontrado");
       
    }
    
 });

module.exports = router;