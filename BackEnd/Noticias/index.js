const express = require('express');
const app = express();
const cors = require('cors');
const noticiaRouter = require('./noticiaRouter');
app.use(express.json());
app.use(cors());
app.use(noticiaRouter);
app.listen(3000, ()=>{ 
    console.log('listening on port 3000')});