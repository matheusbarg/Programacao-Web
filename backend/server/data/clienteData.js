const database = require('../database/database');

exports.getClientes = function(){
    return database.query('select * from cliente');

}

exports.getCliente = function(clienteID){
    return database.query('select * from cliente where codigo = $1',[clienteID]);
}

exports.deleteCliente = function(clienteID){
    return database.none('delete from cliente where codigo = $1',[clienteID]);
}

exports.saveCliente = function(cliente){
    return database.one('insert into cliente (codigo,nome,enedereco,telefone) values($1,$2,$3,$4) returning *',
    [cliente.codigo,cliente.nome,cliente.telefone]);
}