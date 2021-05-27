const database = require('../database/database');

exports.getAssuntos = function(){
    return database.query('select * from assunto');

}

exports.getAssunto = function(assuntoID){
    return database.query('select * from assunto where codigo = $1',[assuntoID]);
}

exports.deleteAssunto = function(assuntoID){
    return database.none('delete from assunto where codigo = $1',[assuntoID]);
}

exports.saveAssunto = function(assunto){
    return database.one('insert into assunto (codigo,tituloassunto) values($1,$2) returning *',
    [assunto.codigo,assunto.tituloassunto]);
}