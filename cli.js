#!/usr/bin/env node

const { execSync } = require('child_process');

execSync("npx @million/install@latest", { stdio: 'inherit' });