
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');


//var index = require('./routes/index');
var settings = require('./static/routes/settings');
var addCourse = require('./static/routes/addCourse');
var addSession = require('./static/routes/addSession');
var detailview1 = require('./static/routes/detailview1');
var mapview2 = require('./static/routes/mapview2');
var Tabbed = require('./static/routes/Tabbed');
var sessions = require('./static/routes/sessions');

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '/static'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());http://localhost:1234/Tabbed.html#
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('CampuStudy Security Key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, '/static')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
//app.get('/add', add.addFriend);
app.get('/settings', settings.view);
app.get('/addCourse', addCourse.view);
app.get('/addSession', addSession.view);
app.get('/Tabbed', Tabbed.view);
app.get('/detailview1', detailview1.view);
app.get('/mapview2', mapview2.view);
app.get('/sessions', sessions.view);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
