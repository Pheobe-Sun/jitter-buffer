// use nodejs 'http' and 'fs' module
var http = require('http');
var fs = require('fs');

function handleRequest(request, response) {
    if (request.url === '/'){
        console.log('test ongoing')

        //problem with rendering a web app (calling .css and .js file from .html)
        // fs.readFile('./public/index.html', (err, data) => {
        //     if (err) {
        //         console.error(err);
        //         response.writeHead(404, { 'Content-Type': 'text/plain' });
        //         response.write('404 - file not found');
        //     } else {
        //         response.writeHead(200, { 'Content-Type': 'text/html' });
        //         response.write(data.toString());
        //     }
        //     response.end();
        // });
    }

    if (request.url === '/feedback'){
        console.log("Got message:");

        response.setHeader('Access-Control-Allow-Origin', '*');

        var body = [];
        request.on('data', function(chunk) {
            body.push(chunk);
        }).on('end', function() {
            body = Buffer.concat(body).toString();
            console.log(body); // TODO save as csv file
            response.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            response.end("");
            console.log("===============================================\n");
        });
    }

}

var server = http.createServer(handleRequest);
server.listen(8088, function() {
    console.log("Server listening");
    console.log("===============================================");
});
