const http = require('http');
const fs = require('fs');

const port = 3000;
const host = 'localhost';

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    
    let route = './views/';
    switch(req.url) {
        case '/':
            res.statusCode = 200;
            route += 'index.html';
            break;
        case '/contact-us':
            res.statusCode = 200;
            route += 'contact.html';
            break;
        case '/contact':
            res.statusCode = 301;
            res.setHeader('Location', 'contact-us');
            res.end();
            break;
        default:
            res.statusCode = 404;
            route += '404.html';
            break;
    }
    console.log(route);
    fs.readFile(route, (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        }
        res.write(data);
        res.end();
    });
    
});

server.listen(port, () => {
    console.log(`Listening at ${port}`);
});