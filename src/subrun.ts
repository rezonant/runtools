#!/usr/bin/env node
import childProcess from 'child_process';

let args = process.argv.slice(2);

let folder = args[0];
let command = args.slice(1).join(' ');

if (args.length <= 1) {
    console.error(`usage: subrun [folder] [script]`);
    process.exit(1);
}

childProcess.execSync(`npm run ${command}`, { cwd: folder, stdio: 'inherit' });