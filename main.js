var express = require('express');
var app = express();
//var port = process.env.PORT || 8082;
var port = '8082';

app.listen(port);
console.log('Server started! At http://localhost:' + port);