const fs = require('fs');
const path = require('path');
const generate = require('./generate');

const THEME_DIR = path.join(__dirname, '..', 'theme');

if (!fs.existsSync(THEME_DIR)) {
    fs.mkdirSync(THEME_DIR);
}

module.exports = async () => {
    const { base, midnight, mithril, soft } = await generate();

    return Promise.all([
        fs.promises.writeFile(
            path.join(THEME_DIR, 'khazad-dump.json'),
            JSON.stringify(base, null, 4)
        ),
        fs.promises.writeFile(
            path.join(THEME_DIR, 'khazad-dump-midnight.json'),
            JSON.stringify(midnight, null, 4)
        ),
        fs.promises.writeFile(
            path.join(THEME_DIR, 'khazad-dump-mithril.json'),
            JSON.stringify(mithril, null, 4)
        ),
        fs.promises.writeFile(
            path.join(THEME_DIR, 'khazad-dump-soft.json'),
            JSON.stringify(soft, null, 4)
        ),
    ]);
};

if (require.main === module) {
    module.exports();
}