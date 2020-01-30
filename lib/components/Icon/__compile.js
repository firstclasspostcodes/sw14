const fs = require('fs');
const path = require('path');
const glob = require('glob');
const pascalCase = require('pascalcase');

const generateJSXContents = (svg, name) => `
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (${svg});

export const ${name} = createIcon(SVG, '${name}');
`;

const main = async () => {
  const icons = glob.sync(`${__dirname}/assets/*.svg`);

  glob.sync(`${__dirname}/*.jsx`).forEach(fs.unlinkSync);

  const names = icons.map(filepath => {
    const { name } = path.parse(filepath);
    const iconName = pascalCase(name);
    const iconData = fs.readFileSync(filepath, 'utf8');
    const jsx = generateJSXContents(iconData, iconName);
    fs.writeFileSync(`${__dirname}/${iconName}.jsx`, jsx, 'utf8');
    return iconName;
  });

  const exports = names.map(name => `export { ${name} } from './${name}';`);

  exports.push(`export { Icon } from './src';`);

  fs.writeFileSync(`${__dirname}/index.jsx`, `${exports.join('\n')}\n`, 'utf8');
};

main();
