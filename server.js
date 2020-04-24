const db = require('./access-data.js');
const q = require('./query-db');

//Server
const http = require('http');
const fs = require ('fs');
const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
  db.init_data();
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('index.html', function(error, data){
    if (error) {
      res.writeHead(404);
      res.write('Error: file not found');
    } else {
      res.write(data);
    }
    res.end();
  });
  q.query();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
