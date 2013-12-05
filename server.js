var http = require('http');
var url  = require('url');
var fs   = require('fs');

var newPostFormHTML = fs.readFileSync('views/posts/new.html')

function rendernewpostform(request, response) {
   response.writeHead(200, {
        'Content-type': 'text/html; charset=utf-8'
    });
    response.end(newPostFormHTML);
}

function render404(request, response) {
  response.writeHead(404);
  response.end('404 bottles of beer, 404 bottles beer, oh, o my, the page could not be found');
}

http.createServer(function (request, response) {
  var newPostFormRegEx = new RegExp('^/posts/new/?$') 
  var pathname = url.parse(request.url).pathname;
  if (newPostFormRegEx.test(pathname)){
    rendernewpostform(request, response)
  } else {
    render404(request, response)
  };


}).listen(1337, '127.0.0.1');


console.log('Server running at http://127.0.0.1:1337/');