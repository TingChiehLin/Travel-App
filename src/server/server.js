let path = require('path');
const express = require('express');
// const fetch = require('node-fetch');
let bodyParser = require('body-parser');

//Data


const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());
app.use(express.static('dist'));

app.get('/',function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'));
})

app.get('/about',function (req, res) {
    res.sendFile(path.resolve('src/client/views/about.html'));
})

app.post('/result',(req,res) => {

})

const port = 3002;
const server = app.listen(port, () => {
    console.log(`Server is running:${port}`);
});



