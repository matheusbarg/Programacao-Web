const assuntoData = require('../data/assuntoData');


exports.getAssuntos = function(){
    return assuntoData.getAssuntos();
}
exports.getAssunto = function(assuntoID){
    return assuntoData.getAssunto(assuntoID);
}
exports.deleteAssuntos = function(assuntoID){
    return assuntoData.getAssuntos(assuntoID);
}
exports.saveAssunto = function(assunto){
    return assuntoData.saveAssunto(assunto);
}