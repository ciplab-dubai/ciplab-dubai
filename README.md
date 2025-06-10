# 🧪 Vulnerable Supply Chain Demo (For Research Use Only)

This project simulates a **dependency confusion vulnerability** to demonstrate software supply chain attacks.

## 🔥 Description

The dependency `example-internal-package` is assumed to be internal/private. If a malicious actor publishes a public package with the same name, it could be pulled and executed—simulating a real-world supply chain attack.

**This code is intentionally vulnerable. Do not use in production.**

## 👀 How to Use

Just add this to Metadefender SCS

### File Upload Demo

The `metadefender-upload-server.js` script provides a simple web form that
uploads a file to [Metadefender Cloud](https://metadefender.opswat.com/)
for scanning before storing it locally. To run the demo:

1. Install dependencies with `npm install`.
2. Set the environment variable `METADEFENDER_API_KEY` with your API key.
3. Start the server with `node metadefender-upload-server.js`.
4. Navigate to `http://localhost:4000` to upload a file.

Clean files will be moved to the `uploads/` directory. Files flagged as
malicious are discarded.

## 📂 Structure

- `index.js`: Loads the fake internal package
- `package.json`: References the fake dependency
- `.github/workflows/node.yml`: Simulates a CI/CD pipeline

## ✅ License

MIT

> Created by Amer for educational testing
