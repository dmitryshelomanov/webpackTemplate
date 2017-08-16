const static = require('node-static');

let fileServer = new static.Server('./dist', {cahe: false});

require('http').createServer((req, res) => { 
  req.on('end', () => {
    fileServer.serve(req, res);
  }).resume();
}).listen(8080);