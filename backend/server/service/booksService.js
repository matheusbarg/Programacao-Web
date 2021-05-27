const booksData = require('../data/booksData');


exports.getBooks = function(){
    return booksData.getBooks();
}
exports.getBook = function(bookID){
    return booksData.getBook(bookID);
}
exports.deleteBook = function(bookID){
    return booksData.getBook(bookID);
}
exports.saveBook = function(book){
    return booksData.saveBook(book);
}