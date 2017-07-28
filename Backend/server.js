/**
 * Created by Ritik on 28-06-2017.
 */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', require('./routes/api'));

app.listen(4000, function () {
    console.log("Listening o port 4000");
});
