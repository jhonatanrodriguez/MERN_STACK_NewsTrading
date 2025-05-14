const noticiaDao = require('./noticiaDao');
function getNoticias(noticia, done){
    noticiaDao.getNoticias(noticia, done)
}
function getNoticiasById(noticia, id, done){
    noticiaDao.getNoticiasById(noticia, id, done)
}
function getTopics(noticia, done){
    noticiaDao.getTopics(noticia, done)
}
function getTopics1(noticia, done){
    noticiaDao.getTopics1(noticia, done)
}
function getTopics2(noticia, done){
    noticiaDao.getTopics2(noticia, done)
}
function getTopics3(noticia, done){
    noticiaDao.getTopics3(noticia, done)
}
function getTopics4(noticia, done){
    noticiaDao.getTopics4(noticia, done)
}
module.exports = {getNoticias, getNoticiasById, getTopics, getTopics1, getTopics2, getTopics3, getTopics4}