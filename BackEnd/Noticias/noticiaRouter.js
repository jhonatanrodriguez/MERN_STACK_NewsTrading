const express = require('express');
const router = express.Router();
const noticiaController = require('./noticiaController');
const Noticia = require('./noticiaModel');

router.get('/get', async(req, res)=>{
    noticiaController.getNoticias(Noticia, (err,result)=>{
        try {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(200).send(result);
            }
        } catch (err) {
            res.status(500).send(err);
        }
    })
});
router.get('/get/:id', async(req, res)=>{
    id = req.params.id;
    noticiaController.getNoticiasById(Noticia, id, (err,result)=>{
        try {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(200).send(result);
            }
        } catch (err) {
            res.status(500).send(err);
        }
    })
});
router.get('/topic', async(req, res)=>{
    noticiaController.getTopics(Noticia, (err,result)=>{
        try {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(200).send(result);
            }
        } catch (err) {
            res.status(500).send(err);
        }
    })
});
router.get('/topic1', async(req, res)=>{
    noticiaController.getTopics1(Noticia, (err,result)=>{
        try {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(200).send(result);
            }
        } catch (err) {
            res.status(500).send(err);
        }
    })
});
router.get('/topic2', async(req, res)=>{
    noticiaController.getTopics2(Noticia, (err,result)=>{
        try {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(200).send(result);
            }
        } catch (err) {
            res.status(500).send(err);
        }
    })
});
router.get('/topic3', async(req, res)=>{
    noticiaController.getTopics3(Noticia, (err,result)=>{
        try {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(200).send(result);
            }
        } catch (err) {
            res.status(500).send(err);
        }
    })
});
router.get('/topic4', async(req, res)=>{
    noticiaController.getTopics4(Noticia, (err,result)=>{
        try {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(200).send(result);
            }
        } catch (err) {
            res.status(500).send(err);
        }
    })
});
module.exports = router;