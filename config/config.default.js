/*
 * @Date           : 2022-03-10 15:43:52
 * @FilePath       : /jinnian-cms-server/config/config.default.js
 * @Description    : 
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1646898224187_4538';

  // add your middleware config here
  config.middleware = [];

  //安全
  config.security ={
    csrf: false,
  };

  // egg-sequelize  数据库配置 
  config.sequelize ={
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'jinnian987654',
    database: 'cms_test1',
    // connectionUri: 'mysql://root:@127.0.0.1:3306/test',
    // delegate: 'model', // load all models to `app[delegate]` and `ctx[delegate]`, default to `model`
    // baseDir: 'model', // load all files in `app/${baseDir}` as models, default to `model`
    // exclude: 'index.js', // ignore `app/${baseDir}/index.js` when load models, support glob and array
    // more sequelize options
    // benchmark: true,
    // logging(...args) {
    //   // if benchmark enabled, log used
    //   const used = typeof args[1] === 'number' ? `[${args[1]}ms]` : '';
    //   app.logger.info('[egg-sequelize]%s %s', used, args[0]);
    // },
    // define: {
    //   freezeTableName: false,
    //   underscored: true,
    // },

  };


  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
