const { resolve } = require('node:path');

const viteAlias = {
  '@C': resolve(__dirname, './src/components'),
  '@P': resolve(__dirname, './src/pages'),
  '@S': resolve(__dirname, './src/stores'),
  '@LAY': resolve(__dirname, './src/layouts'),
  '@LL': resolve(__dirname, './src/linkedLib/components'),
};

module.exports = {
  viteAlias,
};
