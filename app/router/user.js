/*
 * @Date           : 2022-03-12 10:39:20
 * @FilePath       : /jinnian-cms-server/app/router/user.js
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
  //  app.resources("user",'/user',controller.user)

/**
 * @api {get}  /user/all   列表查询
 * @apiGroup 用户模块
 *
 * @apiBody {Number} [currentPage]  当前页数
 * @apiBody {Number} [pageSize]    每页条数
 *
 * @apiSuccess {Object[]} data       数组
 */
  router.get('/user/all', controller.user.findAll);


  /**
 * @api {get}  /user/info   根据 id 查单条数据
 * @apiGroup 用户模块
 *
 * @apiBody {Number} [id]   主键ID 
 *
 * @apiSuccess {Object} data       对象
 */
   router.get('/user/info', controller.user.info);


  /**
 * @api {post}  /user/create   创建单条数据 
 * @apiGroup 用户模块
 *
 *
 * @apiSuccess {Object} data       对象
 */
   router.post('/user/create', controller.user.create);


     /**
 * @api {post}  /user/update   更新单条数据 
 * @apiGroup 用户模块
 *
 *
 * @apiSuccess {Object} data       对象
 */
router.post('/user/update', controller.user.update);


     /**
 * @api {post}  /user/destroy   删除单条数据 
 * @apiGroup 用户模块
 *
 *
 * @apiSuccess {Object} data       对象
 */
      router.post('/user/destroy', controller.user.destroy);




 
};
