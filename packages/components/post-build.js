const path = require("path");
const klaw = require("klaw");
const fs = require("fs-extra");
const srcDir = path.join(__dirname, "src");
const destDir = path.join(__dirname, "es");
async function main() {
    const copying = [];
    for await (const file of klaw(srcDir, {
        filter: fileName => !/\.tsx?$/.test(fileName)
    })) {
        if (!file.stats.isDirectory()) {
            const relative = path.relative(srcDir, file.path);
            console.log(`Copying ${relative}`);
            copying.push(fs.copy(file.path, path.join(destDir, relative)));
            // const fileName = path.basename(relative);
            // const dirName = path.dirname(relative);
            // const extname = path.extname(fileName);
            // const baseName = path.basename(fileName, extname);
            // const writeFile = path.join(destDir, dirName, `${baseName}.css`);
            // if (extname === '.scss' || extname === '.sass') {
            //     console.log(`Write ${writeFile}`)
            //     const content = sass.renderSync({file: file.path});
            //     copying.push(fs.promises.writeFile(writeFile, content.css));
            // }
        }
    }
    await Promise.all(copying);
}
main()
    .then(() => process.exit(0))
    .catch(err => {
        console.error(err);
        process.exit(-1);
    });
setInterval(() => {}, 1000);