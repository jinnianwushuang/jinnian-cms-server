/*
 * @Date           : 2022-03-12 10:47:51
 * @FilePath       : /jinnian-cms-server/app/service/admin.js
 * @Description    : 
 */

'use strict';

const Service = require('egg').Service;

class AdminService extends Service {
  async login(params) {
      const {ctx} = this;
     
       console.log('params',params); 
      const result=  await ctx.model.Admin.findOne(params).exec()
      console.log('result--resultresult--',result ); 
      return result

    
  }
}

module.exports = AdminService;
