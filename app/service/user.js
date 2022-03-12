/*
 * @Date           : 2022-03-13 01:16:47
 * @FilePath       : /jinnian-cms-server/app/service/user.js
 * @Description    : 
 */
'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    /**
     * 查询所有 
     * @param {*} params 
     * @returns 
     */
  async findAll(params) {

    const {ctx} = this;
    console.log('params',params);
    const result=  await ctx.model.User.paginate({ },{
        page: params.page, 
        limit: params.limit 
    }) 
         
    return result
    
  }
  /**
   * 
   */
}

module.exports = UserService;
