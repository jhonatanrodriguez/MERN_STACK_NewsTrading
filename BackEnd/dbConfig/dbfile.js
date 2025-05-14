const mongoose = require('mongoose');
const express = require('express');
const url = 'mongodb://127.0.0.1/noticiasDb';
const app = express();
app.use(express.json());
mongoose.connect(url,{useNewUrlParser:true});
const connection = mongoose.connection;
connection.on('open', ()=>{
    console.log('...connected')
});



