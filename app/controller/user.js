/*
 * @Date           : 2022-03-11 10:59:48
 * @FilePath       : /jinnian-cms-server/app/controller/user.js
 * @Description    : 
 */
'use strict';

 
const Controller = require('egg').Controller;

class UserController extends Controller {
  /**
   * 列表查询 
   */
 async findAll() {
  const { ctx } = this;
   try {
    const params = {
      page: ctx.query.currentPage ,
      limit:  ctx.query.pageSize ,
    };
    const result= await ctx.service.user.findAll(params);
    ctx.api_success_data(result);
   } catch (error) {
    ctx.api_error_msg(error); 
   }

  }
/**
 * 根据 id 查单条数据 
 */

  async info() {
  
    const { ctx } = this;
    try {
      const _id =  ctx.request.query.id ;
     const result= await ctx.model.User.findById(_id).exec();
     ctx.api_success_data(result);
    } catch (error) {
     ctx.api_error_msg(error); 
    }


  }


/**
 * 创建单条数据 
 */
  async create() {
  

    const { ctx } = this;
    try {
     const { name, age } = ctx.request.body;
     const result= await  ctx.model.User.create({ name, age });
     ctx.api_success_data(result);
    } catch (error) {
     ctx.api_error_msg(error); 
    }


  }
/**
 * 更新单条数据 
 */
  async update() {
    const { ctx } = this;
    const _id =  ctx.request.body.id ;
    const user = await ctx.model.User.findById(_id).exec();
    if (!user) {
      ctx.api_error_msg('用户不存在'); 
      return;
    }

 
  
    try {
     const { name, age } = ctx.request.body;
     const result= await user.update({ name, age });
     ctx.api_success_data(result);
    } catch (error) {
     ctx.api_error_msg(error); 
    }


  }
/**
 *  删除单条数据 
 */
  async destroy() {
    const ctx = this.ctx;
    const _id =  ctx.request.body.id ;
    const user = await ctx.model.User.findById(_id).exec();
    if (!user) {
      ctx.api_error_msg('用户不存在'); 
      return;
    }
 
    try {
   
      const result=  await user.remove({_id });
      ctx.api_success_data(result);
     } catch (error) {
      ctx.api_error_msg(error); 
     }
 
  }
}

module.exports = UserController;
