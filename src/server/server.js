let path = require('path');
const express = require('express');
let bodyParser = require('body-parser');

//Data
let Data = {};

const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());
app.use(express.static('dist'));

app.get('/',function (req, res) {
    //res.sendFile(path.resolve('src/client/views/index.html'));
    res.status(200).send('./dist/index.html');
})

app.get('/about',function (req, res) {
    res.sendFile(path.resolve('src/client/views/about.html'));
})

app.post('/result',(req,res) => {
    Object.assign(Data, req.body);
    res.status(201).send(Data);
})

const port = 3002;
const server = app.listen(port, () => {
    console.log(`Server is running:${port}`);
});

module.exports = app;
