const db = require('./access-data.js');
const q = require('./query-db');

//Server
const http = require('http');
const fs = require ('fs');
const hostname = '127.0.0.1';
const port = 3000;
db.init_data();
const server = http.createServer((req, res) => {
  var url = req.url;
  if (url == '/query'){
    res.writeHead(200);
    const result = q.query();
    console.log(result);
    //res.write(result);
    res.end();
  } else {
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
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
