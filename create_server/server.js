const http = require('http');
const port = 3000;
const host = 'localhost';

const server = http.createServer((req, res) => {
    console.log("Requested for URL");
});

server.listen(port, () => {
    console.log(`Listen at ${port}`);
})