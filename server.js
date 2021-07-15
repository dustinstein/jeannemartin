const express = require('express');
const path = require("path");
const enforce = require('express-sslify');
const port = process.env.PORT || 8080;
const app = express();

app.use(enforce.HTTPS({ trustProtoHeader: true }));

app.use(express.static(path.join(__dirname)));

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, function() {
    console.log('Server listening on port '+ port);
});

console.log('Server started!');
