const express = require('express');
const { func } = require('../database/database');
const router = express.Router();
const loginService = require('../service/loginService');

router.put('/login', async function(req, res) {
   
    const user = req.body;
    const userConnect = await loginService.auth(user);

    if (userConnect!= "") {
       res.json(userConnect)
      
    } else {
       console.log("Não conectou")
       status.code(404);
    }
    
 });

module.exports = router;