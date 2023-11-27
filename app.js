const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.listen(process.env.PORT || 3010, function() {
    console.log("Servidor corriendo: http://localhost:3010");
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
});
