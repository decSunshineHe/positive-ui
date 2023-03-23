const path = require("path");
const klaw = require("klaw");
const fs = require("fs-extra");
const srcDir = path.join(__dirname, "src");
const destDir = path.join(__dirname, "es");

const chokidar = require('chokidar');

const watcher = chokidar.watch('src/**/*.!(ts|tsx)', {
  // ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true
});

const log = console.log.bind(console);
// Add event listeners.
watcher
  .on('add', path => log(`File ${path} has been added`))
  .on('change', path => {
    log(`File ${path} has been changed`)
    change(path)
  })
  .on('unlink', path => log(`File ${path} has been removed`));

async function change(fileName) {
  const pathName = path.join(__dirname, fileName);
  const relative = path.relative(srcDir, fileName);
  const outpath = path.join(destDir, relative)
  console.log(`Copying ${relative}`);
  console.log(pathName, relative, outpath)
  const stat = await fs.statSync(outpath)
  if (stat) {
    const readable=fs.createReadStream(pathName);
    const writable=fs.createWriteStream(outpath);
    readable.pipe(writable);
    readable.on('end', () => {
      console.log('已经更新' + fileName)
    });
  } else {
    fs.copyFileSync(file.path, path.join(destDir, relative))
  }
}