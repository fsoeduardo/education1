//Initialize our Express Web Framework
var express = require('express');
var app = express();

//Native NodeJS module for resolving path
var path = require('path');

//Get port using enviromental variable
var port = process.env.PORT;

//Setting EJS as our view engine and the directory where our views will be
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'client', 'views'));

app.use(express.static(path.resolve(__dirname, 'client')));

//Setting home route
app.get('/', function(req, res){
  res.render('index.ejs');
});

//Making the app listen for incoming requests on the port from above
app.listen(port, function(){
  console.log('Server running on port ' + port);
});