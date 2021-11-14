import { EggPlugin } from 'egg';
const path = require('path');

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  dev: {
    enable: true,
    path: path.resolve(__dirname, '../lib/plugin/dev')
  }
};

export default plugin;
