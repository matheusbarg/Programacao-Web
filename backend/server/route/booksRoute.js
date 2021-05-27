const express = require('express');
const { func } = require('../database/database');
const router = express.Router();
const booksService = require('../service/booksService');

router.get('/books',async function(req,res){
    try{const books = await booksService.getBooks();
    res.json(books);
    }catch(error){
        return res.status(404).send(e.message);
    }
});

router.get("/book/:id",async function(req,res){
    const book = await booksService.getBook(req.params.id);
    res.status(201).json(book);
 
});

router.delete('/book/:id',async function(req,res){
    return res.json([{message:'registro excluido com sucesso'}]);
});

router.put('/book',async function(req,res) {
    const book = req.body;
    const newBook = await booksService.saveBook(book);
    res.json(newBook);
});

module.exports =router;