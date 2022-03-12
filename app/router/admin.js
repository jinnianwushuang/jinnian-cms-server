/*
 * @Date           : 2022-03-12 10:39:20
 * @FilePath       : /jinnian-cms-server/app/router/admin.js
 * @Description    : 
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
//   router.get('/', controller.home.index);
  // app.resources('model-name', '/api/model-name', app.controller.modelName);
//   app.resources("user",'/user',controller.user)
router.post('/admin/login', controller.admin.login);
};
