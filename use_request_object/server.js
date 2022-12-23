const http = require('http');
const port = 3000;
const host = 'localhost';

const server = http.createServer((req, res) => {
    console.log("Requested URL", req.url);
    console.log("Requested Method", req.method);
});

server.listen(port, () => {
    console.log(`Port Listen at ${port}`);
})