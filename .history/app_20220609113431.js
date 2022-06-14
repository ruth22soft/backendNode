const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.send("Hello World");
});

app.get('/blog', (req, res) =>{
    res.send("Hello Blog");
})

module.exports = app