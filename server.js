var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var todos = require('./routes/todos');
var notFound = require('./routes/notFound');
var morgan = require('morgan');

var app = express();
app.set('port',(process.env.PORT || 3000));
//Client side
app.use(express.static(path.join(__dirname,'client')));

//View Engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);
//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:false
}));
//Morgan Development logger
app.use(morgan('dev'));
//Routes
app.use('/',index);
app.use('/api/v1/',todos);
app.use('*',notFound);
//Start Server
var port  = app.get('port');
app.listen(port,()=>{
  console.log("Server up and running on " + port );
});
