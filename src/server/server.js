let path = require('path');
const express = require('express');
const fetch = require('node-fetch');
let bodtParser = require('body-parser');

const dotenv = require('dotenv');
const application_Key = process.env.API_KEY;

const app = express();
app.use(bodtParser.json());
app.use(express.static('dist'));

app.get('/',function (req,res) {
    res.sendFile(path.resolve('src/client/views/index.html'));
})

app.get('about',function (req,res) {
    res.sendFile(path.resolve('src/client/views/about.html'));
})

app.post('/result',(req,res) => {

})


