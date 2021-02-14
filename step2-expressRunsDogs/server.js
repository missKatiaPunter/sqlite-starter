var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.sendFile("index.html", { root: __dirname })
});

app.get('/api/users', (req, res) => {
    res.send("here wil be users");
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000.");
});