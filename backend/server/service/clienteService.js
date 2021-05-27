const clienteData = require('../data/clienteData');


exports.getClientes = function(){
    return clienteData.getClientes();
}
exports.getCliente = function(clienteID){
    return clienteData.getCliente(clienteID);
}
exports.deleteCliente = function(clienteID){
    return clienteData.getCLiente(clienteID);
}
exports.saveBook = function(cliente){
    return clienteData.saveCliente(cliente);
}