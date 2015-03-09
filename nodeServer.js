var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
//  res.writeHead(200, {'Content-Type': 'application/json'});
//  res.end(JSON.stringify(req));
  
  fs.readFile("."+req.url,function(err,data){
  	if(err){
  		res.writeHead(404, {'Content-Type': 'application/json'});
		res.end(JSON.stringify(err));
  	}
  	
  	var parts = req.url.split(".");
  	switch(parts[parts.length-1]){
  		case "html":
  			res.writeHead(200,{'Content-Type': 'text/html'});
  			break;
  		case "js":
  			res.writeHead(200,{'Content-Type': 'application/javascript'});
  			break;
		case "css":
			res.writeHead(200,{'Content-Type': 'text/css'});
			break;
		case "png":
			res.writeHead(200,{'Content-Type': 'image/png'});
			break;
		default:
			res.writeHead(200,{'Content-Type': 'text/plain'});
			break;
		}
  		res.end(data);
  	});
  	
  	
  
  
  /*
  var cache = [];
	res.end(JSON.stringify(req, function(key, value) {
		if (typeof value === 'object' && value !== null) {
		    if (cache.indexOf(value) !== -1) {
		        // Circular reference found, discard key
		        return;
		    }
		    // Store value in our collection
		    cache.push(value);
		}
		return value;
	}));
	cache = null; // Enable garbage collection
  */
  
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
