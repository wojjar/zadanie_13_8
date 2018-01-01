var fs = require('fs');
var http = require('http');
var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
            fs.readFile('index.html', function(err, data) {
              response.writeHead(200, {'Content-Type': 'text/html'});
              response.write(data);
              response.end();
          });
    }
    else {
            response.statusCode = 404;
            response.write('<h1>404: Zła ścieżka!</h1>');
            response.end();
    }
}).listen(9000);

