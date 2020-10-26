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
    res.send('./dist/index.html');
})

app.get('/about',function (req, res) {
    res.sendFile(path.resolve('src/client/views/about.html'));
})

app.post('/result',(req,res) => {
    Data.temperature = req.body.temperature;
    Data.condition = req.body.condition;
    Data.duration = req.body.desDuration;
    Data.cityImage  = req.body.cityImage;
    Data.date = req.body.date;
    res.send(Data);
})

const port = 3002;
const server = app.listen(port, () => {
    console.log(`Server is running:${port}`);
});

module.exports = app;

