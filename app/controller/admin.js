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
 
    try {
      const body = ctx.request.body;
      // console.log(' ctx.request.', ctx.request.body);
      const params = {
        name: body.name,
        password: body.password,
      };
      const result = await ctx.service.admin.login(params);
      ctx.api_success_data(result);
    } catch (error) {
      ctx.api_error_msg(error);
    }
  }
}
module.exports = AdminController;
