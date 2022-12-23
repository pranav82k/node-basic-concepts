const http = require('http');
const port = 3000;
const host = 'localhost';

const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'text/plain');
    // res.write("Welcome to Ck Mobile");

    res.setHeader('Content-Type', 'text/html');
    res.write('<body class="body"></body>');
    res.write('<h1>Welcome to CK Mobile</h1>');
    res.end();
});

server.listen(port, () => {
    console.log(`Listening at Port: ${port}`);
});