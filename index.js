const http = require('http');

const myServer = http.createServer((req, res) => {
    res.write(`<h1>Hello User</h1>`);
    res.end();
})

myServer.listen(5000);