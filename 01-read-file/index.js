const fs = require('fs');
const path = require('path');
const { stdout } = require('process');

const sourcePath = path.join(__dirname, 'text.txt');
const stream = fs.createReadStream(sourcePath, 'utf-8');

stream.pipe(stdout);