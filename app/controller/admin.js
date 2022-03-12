/*
 * @Date           : 2022-03-12 10:43:29
 * @FilePath       : /jinnian-cms-server/app/controller/admin.js
 * @Description    :
 */
"use strict";

const Controller = require("egg").Controller;

class AdminController extends Controller {
  async login() {
    const { ctx } = this;
    const response = {};

    try {
      const body = ctx.request.body;
      // console.log(' ctx.request.', ctx.request.body);
      const query = {
        name: body.name,
        password: body.password,
      };
   
      const result = await ctx.service.admin.login(query);
      // console.log('result----',result );
      response.success = true;
      response.data = result;
    } catch (error) {
      response.success = false;
    }

    ctx.body = response;
  }
}

module.exports = AdminController;
