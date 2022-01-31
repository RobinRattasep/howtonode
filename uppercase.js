var http = require('http');
var uc = require('upper-case');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("Tere maailm, failis on v2ikesed t2hed, kuidas front endis on?!"));
  res.end();
}).listen(8080); 