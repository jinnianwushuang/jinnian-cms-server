/*
 * @Date           : 2022-03-10 15:43:52
 * @FilePath       : /jinnian-cms-server/config/plugin.js
 * @Description    : 
 */
'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  // 数据库迁移 
  // sequelize :{
  //  enable:true,
  //  package:'egg-sequelize'
  // }
  mongoose:{
    enable: true,
  package: 'egg-mongoose',
  } 

};
