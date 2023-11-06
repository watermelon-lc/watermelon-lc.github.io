const fs = require('fs');
const path = require('path');

function createFile({ target, version }, name, template = 'template.md') {
  const filePath = path.resolve(__dirname, '..', `${target}/${name}.md`);
  try {
    const templateContent = fs.readFileSync(path.resolve(__dirname, '..', template), 'utf-8').replaceAll('{name}', name).replaceAll('{picture}', `${version}/${name}.jpg`);
    fs.writeFile(filePath, templateContent, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`文件${filePath}创建完成！`);
    });
  } catch (error) {
    console.error(error);
  }
}

const dicts = {
  2: 'second',
  3: 'third',
  4: 'fourth',
};

const args = process.argv.slice(2);

createFile({
  target: `${args[0]}/${dicts[args[1]]}`,
  version: dicts[args[1]]
}, args[2]);
