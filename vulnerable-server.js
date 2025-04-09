// 🚨 This file contains intentionally vulnerable code for educational security testing only
// Vulnerability: Command Injection

const { exec } = require('child_process');
const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
  const queryObject = url.parse(req.url, true).query;

  // 🚨 Vulnerable to command injection
  exec('ls ' + queryObject.path, (err, stdout, stderr) => {
    if (err) {
      res.writeHead(500);
      return res.end('Error executing command');
    }
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(stdout);
  });

}).listen(3000, () => {
  console.log('Server listening on port 3000');
});
