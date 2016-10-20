var express = require('express');
var bodyparser = require('body-parser');
var connection = require('./connection');
var routes = require('./routes');
var cors = require('cors');



var app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(cors());

connection.init();
routes.configure(app);

var server = app.listen(8000, function() {
  console.log('Server listening on port ' + server.address().port);
});

// /*
// * Module dependencies.
// */
// var express    = require('express')
//     , common    = require('./commons')
//     , fs       = require('fs')
//     , http     = require('http')
//     , util     = require('util')
//     , path     = require('path')
//     , logger = require('logger')
//     , bodyParser = require('body-parser');
//
// var app = express();
//
//
// /*
//  * connect middleware - please note not all the following are needed for the specifics of this example but are generally used.
//  */
//
//     app.set('port', process.env.PORT || 3000);
//     app.set('views', __dirname + '/views');
//     app.use(bodyParser({ keepExtensions: true, uploadDir: __dirname + '/public/uploads' }));
//     app.use(express.static(path.join(__dirname, '/public')));
//     app.use(express.static(__dirname + '/static'));
//
//
// //File upload
// app.get('/upload', common.imageForm);
// app.post('/upload', common.uploadImage);
//
//
// http.createServer(app).listen(app.get('port'), function(){
//     console.log('Express server listening on port ' + app.get('port'));
// });
