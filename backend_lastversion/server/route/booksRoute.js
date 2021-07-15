const express = require('express');
const { func } = require('../database/database');
const router = express.Router();
const booksService = require('../service/booksService');
const redis = require('redis');
const client = redis.createClient();

router.get('/books',async function(req,res){
   
    client.exists('books',async function(err, reply) {
        if (reply === 1) {
            console.log('Existe');
            client.get('books', function(err, reply) {
                console.log(reply);
              });
          
        } else {
          console.log('Nao existe');
          const books = await booksService.getBooks();
            res.json(books);
          
        }
      });
      
});


router.get("/book/:id",async function(req,res){
    const book = await booksService.getBook(req.params.id);
    res.json(book);
 
});

router.delete('/book/:id',async function(req,res){
    const deleteBook = await booksService.deleteBook(req.params.id);
    //return res.json([{message:'registro excluido com sucesso'}]); 
    res.json(deleteBook);
});

router.put('/book',async function(req,res) {
    const book = req.body;
    const newBook = await booksService.saveBook(book);
    res.json(newBook);
});

module.exports =router;