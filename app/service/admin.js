/*
 * @Date           : 2022-03-12 10:47:51
 * @FilePath       : /jinnian-cms-server/app/service/admin.js
 * @Description    : 
 */

'use strict';

const Service = require('egg').Service;

class AdminService extends Service {
  async login(query) {
      const {ctx,app} = this;
      console.log('ctx.model',query);
   
      const result=  await app.model.Admin.findOne({
          where:{
              name: query.name,
              password: query.password
          }
      })
      console.log('result--resultresult--',result ); 
      return result

    
  }
}

module.exports = AdminService;
