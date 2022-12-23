const http = require('http');
const fs = require('fs');
const moment = require('moment');

const port = 3000;
// const host = 'localhost';
const christmas = '2022-12-25';
console.log(moment(christmas).format('LL'));

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    
    let route = './views/';
    switch (req.url) {
        case '/':
            route += 'index.html';
            res.statusCode = 200;
            break;
        case '/contact':
            route += 'contact.html';
            res.statusCode = 200;
            break;
        case '/contact-us':
            res.statusCode = 301;
            res.setHeader('Location', '/contact');
            res.end();
            break;
    
        default:
            res.statusCode = 404;
            route += '404.html'
            break;
    }

    fs.readFile(route, (err, data) => {
        if(err)
        {
            console.log(err);
            res.end();
        }
        res.write(data);
        res.end();
    })
});

server.listen(port, () => {
    console.log(`Listening at ${port}`);
});