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

// Only these keys are safe to expose in the public client bundle.
// Never add server-only secrets (e.g. RESEND_API_KEY) here.
const CLIENT_SAFE_KEYS = ['POSTHOG_KEY', 'POSTHOG_HOST', 'NODE_ENV'];

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

// Drop anything not on the allowlist before it can reach the public bundle.
const safeVars = Object.fromEntries(
  Object.entries(envVars).filter(([key]) => CLIENT_SAFE_KEYS.includes(key))
);

// Generate env.js content (JSON.stringify keeps values safely escaped)
const envJsContent = `// Environment variables for client-side use
// This file is generated during build and contains safe environment variables
window.__ENV__ = {
${Object.entries(safeVars)
  .map(([key, value]) => `  ${key}: ${JSON.stringify(value)}`)
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
