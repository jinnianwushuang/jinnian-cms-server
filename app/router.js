/*
 * @Date           : 2022-03-10 15:43:52
 * @FilePath       : /jinnian-cms-server/app/router.js
 * @Description    : 
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);
  // app.resources('model-name', '/api/model-name', app.controller.modelName);
  // app.resources("user",'/user',controller.user)

  require("./router/admin")(app);
  require("./router/user")(app);
};
