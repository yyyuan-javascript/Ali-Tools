import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};
  config.dev = {
    getWebpackConf: () => require('./webpack.config')
  }
  return config;
};
