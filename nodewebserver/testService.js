var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*'});
  res.end('{"success":true,"results":[{"type"  : "Choice 3","ID" : "value3"}]}');
}).listen(8124, "localhost");
console.log('Server running at //localhost:8124/');