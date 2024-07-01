#!/usr/bin/env node
const dotenv = require('dotenv');
import path from 'path';
import fs from 'fs';
import childProcess from 'child_process';

let args = process.argv.slice(2);

if (args.length === 0) {
    console.error(`usage: dotenv [command]`);
    process.exit(1);
}

let folder = '.';
if (args[0] === '-d') {
    folder = args[1]
    args.shift();
    args.shift();
}

dotenv.config({ path: path.join(folder, '.env') });

let command = args.join(' ');
childProcess.execSync(`${command}`, { stdio: 'inherit', env: process.env });