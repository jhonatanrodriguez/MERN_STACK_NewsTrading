const noticiaService = require('./noticiaService');
function getNoticias(noticia, done){
    noticiaService.getNoticias(noticia, done)
}
function getNoticiasById(noticia, id, done){
    noticiaService.getNoticiasById(noticia, id, done)
}
function getTopics(noticia, done){
    noticiaService.getTopics(noticia, done)
}
function getTopics1(noticia, done){
    noticiaService.getTopics1(noticia, done)
}
function getTopics2(noticia, done){
    noticiaService.getTopics2(noticia, done)
}
function getTopics3(noticia, done){
    noticiaService.getTopics3(noticia, done)
}
function getTopics4(noticia, done){
    noticiaService.getTopics4(noticia, done)
}
module.exports = {getNoticias, getNoticiasById, getTopics, getTopics1, getTopics2, getTopics3, getTopics4}