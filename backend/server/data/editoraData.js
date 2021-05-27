const database = require('../database/database');

exports.getEditoras = function(){
    return database.query('select * from editora');

}

exports.getEditora = function(editorasID){
    return database.query('select * from editora where codigo = $1',[editorasID]);
}

exports.deleteEditora = function(editorasID){
    return database.none('delete from editora where codigo = $1',[editorasID]);
}

exports.saveEditora = function(editora){
    return database.one('insert into editora (codigo,nome,enedereco,telefone,gerente) values($1,$2,$3,$4,$5) returning *',
    [editora.codigo,editora.nome,editora.telefone,editora.gerente]);
}