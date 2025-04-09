// 🚨 Intentionally Vulnerable File: Command Injection Demo (CWE-77)
// ⚠️ CVE Reference Example: CVE-2021-12345 (Simulated)
// Description: Accepts untrusted input from query string and executes shell command unsafely

const http = require('http');
const url = require('url');
const { exec } = require('child_process');

http.createServer((req, res) => {
  const query = url.parse(req.url, true).query;

  // 🚨 Vulnerability: Command Injection
  // ❌ Directly passes untrusted input to shell command
  const userInput = query.cmd;

  exec(`sh -c "${userInput}"`, (err, stdout, stderr) => {
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
