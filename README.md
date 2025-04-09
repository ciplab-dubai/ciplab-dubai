# 🧪 Vulnerable Supply Chain Demo (For Research Use Only)

This project simulates a **dependency confusion vulnerability** to demonstrate software supply chain attacks.

## 🔥 Description

The dependency `example-internal-package` is assumed to be internal/private. If a malicious actor publishes a public package with the same name, it could be pulled and executed—simulating a real-world supply chain attack.

**This code is intentionally vulnerable. Do not use in production.**

## 👀 How to Use

Just add this to Metadefender SCS

## 📂 Structure

- `index.js`: Loads the fake internal package
- `package.json`: References the fake dependency
- `.github/workflows/node.yml`: Simulates a CI/CD pipeline

## ✅ License

MIT

> Created by Amer for educational testing
