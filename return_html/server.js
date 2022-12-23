const http = require('http');
const fs = require('fs');
const port = 3000;
const host = 'localhost';

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./views/index.html', (err, data) => {
        if(err) console.log(err);
        // res.write(data);
        // res.end();

        res.end(data);
    })
});

server.listen(port, () => {
    console.log(`Listening at port: ${port}`);
})