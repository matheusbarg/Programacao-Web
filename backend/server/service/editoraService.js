const editoraData = require('../data/editoraData');


exports.getEditoras = function(){
    return editoraData.getEditoras();
}
exports.getEditora = function(editoraID){
    return editoraData.getEditora(editoraID);
}
exports.deleteCliente = function(editoraID){
    return editoraData.getEditora(editoraID);
}
exports.saveEditora = function(editora){
    return editoraData.saveEditora(editora);
}