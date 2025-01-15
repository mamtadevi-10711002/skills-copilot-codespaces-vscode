// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the comments.html file from the previous exercise.

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/comments') {
        const filePath = path.join(__dirname, 'comments.html');
        const readStream = fs.createReadStream(filePath);
        readStream.pipe(res);
    }
    res.end();
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});