const fs = require('fs');
const path = require('path');
const generate = require('./generate');

const THEME_DIR = path.join(__dirname, '..', 'theme');

if (!fs.existsSync(THEME_DIR)) {
    fs.mkdirSync(THEME_DIR);
}

module.exports = async () => {
    const { arkenstone, dumur, ithildin, Khuzd, mithril, narag } = await generate();

    return Promise.all([
        fs.promises.writeFile(
            path.join(THEME_DIR, 'khazad-dump-arkenstone.json'),
            JSON.stringify(arkenstone, null, 4)
        ),
        fs.promises.writeFile(
            path.join(THEME_DIR, 'khazad-dump-dumur.json'),
            JSON.stringify(dumur, null, 4)
        ),
        fs.promises.writeFile(
            path.join(THEME_DIR, 'khazad-dump-ithildin.json'),
            JSON.stringify(ithildin, null, 4)
        ),
        fs.promises.writeFile(
            path.join(THEME_DIR, 'khazad-dump-khuzd.json'),
            JSON.stringify(Khuzd, null, 4)
        ),
        fs.promises.writeFile(
            path.join(THEME_DIR, 'khazad-dump-mithril.json'),
            JSON.stringify(mithril, null, 4)
        ),
        fs.promises.writeFile(
            path.join(THEME_DIR, 'khazad-dump-narag.json'),
            JSON.stringify(narag, null, 4)
        ),
    ]);
};

if (require.main === module) {
    module.exports();
}