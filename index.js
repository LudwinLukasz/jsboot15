var fs = require('fs');
var http = require('http');

var server = http.createServer();

server.on('request', function(request, response) {
	response.setHeader("Content-Type", "text/html; charset=utf-8");
	if (request.method === 'GET' && request.url === '/') {
 		fs.readFile('./index.html', function(err, data) {
		response.write(data);
		response.end();
		});
	} else {
		response.setHeader("Content-Type", "image/jpg; charset=utf-8");
 		response.statusCode = 404;
 		fs.readFile('./error.jpg', function(err, data) {
		response.write(data);
		response.end();
		});   
	}
});
server.listen(9000);