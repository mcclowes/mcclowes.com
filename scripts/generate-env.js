#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read .env file
const envPath = path.join(__dirname, '..', '.env');
const envExamplePath = path.join(__dirname, '..', '.env.example');

let envContent = '';

// Try to read .env, fallback to .env.example
if (fs.existsSync(envPath)) {
  envContent = fs.readFileSync(envPath, 'utf8');
} else if (fs.existsSync(envExamplePath)) {
  envContent = fs.readFileSync(envExamplePath, 'utf8');
} else {
  console.warn('No .env or .env.example file found');
  process.exit(0);
}

// Parse environment variables
const envVars = {};
envContent.split('\n').forEach((line) => {
  line = line.trim();
  if (line && !line.startsWith('#')) {
    const [key, ...valueParts] = line.split('=');
    if (key && valueParts.length > 0) {
      envVars[key.trim()] = valueParts.join('=').trim();
    }
  }
});

// Generate env.js content
const envJsContent = `// Environment variables for client-side use
// This file is generated during build and contains safe environment variables
window.__ENV__ = {
${Object.entries(envVars)
  .map(([key, value]) => `  ${key}: '${value}'`)
  .join(',\n')}
};
`;

// Write to static directory
const staticDir = path.join(__dirname, '..', 'static');
if (!fs.existsSync(staticDir)) {
  fs.mkdirSync(staticDir, { recursive: true });
}

const envJsPath = path.join(staticDir, 'env.js');
fs.writeFileSync(envJsPath, envJsContent);

console.log('Generated env.js with environment variables');
