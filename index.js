var express = require('express');
var app = express();

app.get('/',(req,res) => {
  res.send('Welcome to Express !');
});

app.listen(3000);

console.log('Server running at port:3000');
