const stdout = require('process');
const fs = require('fs/promises');
const path = require('path');
const { log } = require('console');

const sourcePath = path.join(__dirname, 'secret-folder');

(async () => {

    try {
        const files = await fs.readdir(sourcePath, {withFileTypes: true});
        for (const file of files) {
            if (file.isDirectory()) continue;
            const file_path = path.parse(file.name);
            file_name = file_path.name;
            file_type = (file_path.ext||'').slice(1);
            file_stat = await fs.stat(path.join(sourcePath, file.name));
            file_size = (file_stat.size / 1024).toFixed(2);
            console.log(`${file_name} - ${file_type} - ${file_size}kb`);
        }
    } catch (err) {
        console.error(err);
    }
})();
