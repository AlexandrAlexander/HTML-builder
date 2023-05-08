const readline = require('readline/promises');
const { stdin, stdout } = require('process');
const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname, 'new.txt');
fs.writeFile(sourcePath, '', (err) => {
    if (err) throw err;
});
const output = fs.createWriteStream(sourcePath);

stdout.write('Введите сообщение для записи:\n');

const rl = readline.createInterface(stdin);

rl.on('line', (data) => {
    if (data === 'exit') rl.close();
    output.write(`${data}\n`);
});

rl.on('close', () => {
    process.exit()
});

process.on('SIGINT', function() {
    process.exit();
});

process.on('exit', () => {
    stdout.write('До встречи!');
})