
/**
 * Module dependencies.
 */

var express = require('express');
/*var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');*/


var app = express();


app.use(express.bodyParser());

// all environments
/*app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
*/

//arreglo de citas
var citas = [
{nombre: "jose", cita: "jose dice que te jodan"},
{nombre: "mario", cita: "mario dice que te jodan"},
{nombre: "pedro", cita: "pedro dice que te jodan"},
{nombre: "jesus", cita: "jesus dice que te jodan"},
];



app.get('/', function(req, res) {
  res.type('text/plain'); // set content-type
  res.send('i am a beautiful butterfly'); // send text response
});
app.get('/citas', function(req, res) {
  //res.type('text/json'); // set content-type
  res.jsonp(citas); // send text response
});

app.get('/get/:id', function(req, res) {
	console.log(req.params.id);
	if(req.params.id < citas.length && req.params.id > 0) {
		res.jsonp(citas[req.params.id]);
	} else {
		res.jsonp({error: 'no existe la cita No. ' + req.params.id});
	}
	
});

app.post('/post', function(req, res){
	if(citas.push(req.body)) {
		res.jsonp(true);
	} else {
		res.jsonp(false);
	}
	
});

app.listen(process.env.PORT || 3000);