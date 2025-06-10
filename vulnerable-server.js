// 🚨 Intentionally Vulnerable File: Command Injection Demo (CWE-77)
// ⚠️ CVE Reference Example: CVE-2021-12345 (Simulated)
// Description: Accepts untrusted input from query string and executes shell command unsafely

const http = require('http');
const url = require('url');
const { execFile } = require('child_process');

http.createServer((req, res) => {
  const query = url.parse(req.url, true).query;

  // 🚨 Vulnerability fixed: only allow a safe set of commands
  const userInput = query.cmd;
  const allowed = {
    date: ['date'],
    uptime: ['uptime']
  };
  const cmd = allowed[userInput];
  if (!cmd) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    return res.end('Invalid command');
  }

  execFile(cmd[0], cmd.slice(1), (err, stdout, stderr) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      return res.end(`Error: ${stderr}`);
    }

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Output:\n${stdout}`);
  });

}).listen(3000, () => {
  console.log('Vulnerable server running on port 3000');
});
