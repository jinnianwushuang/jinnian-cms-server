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

  // // egg-sequelize  数据库配置 
  // config.sequelize ={
  //   dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
  //   host: 'localhost',
  //   port: 3306,
  //   username: 'root',
  //   password: 'jinnian987654',
  //   database: 'cms_dev_1',
  //   // connectionUri: 'mysql://root:@127.0.0.1:3306/test',
  //   // delegate: 'model', // load all models to `app[delegate]` and `ctx[delegate]`, default to `model`
  //   // baseDir: 'model', // load all files in `app/${baseDir}` as models, default to `model`
  //   // exclude: 'index.js', // ignore `app/${baseDir}/index.js` when load models, support glob and array
  //   // more sequelize options
  //   // benchmark: true,
  //   // logging(...args) {
  //   //   // if benchmark enabled, log used
  //   //   const used = typeof args[1] === 'number' ? `[${args[1]}ms]` : '';
  //   //   app.logger.info('[egg-sequelize]%s %s', used, args[0]);
  //   // },
  //   define: {
  //     freezeTableName: true,
  //     underscored: true,
  //   },

  // };
  config.mongoose={
    client: {
      url: 'mongodb://127.0.0.1:27017/cms_dev_1',
      options: {},
      // mongoose global plugins, expected a function or an array of function and options
      // plugins: [createdPlugin, [updatedPlugin, pluginOptions]],
    },
  } 

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,POST'
    // {string|Function} origin: '*',
    // {string|Array} allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };
 

  config.security = {
    csrf: {
      // 判断是否需要 ignore 的方法，请求上下文 context 作为第一个参数
      ignore: (ctx) => true,
    },
      // domainWhiteList: [ 'http://localhost:4200' ],
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
