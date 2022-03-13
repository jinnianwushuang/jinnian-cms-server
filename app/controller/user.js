/*
 * @Date           : 2022-03-11 10:59:48
 * @FilePath       : /jinnian-cms-server/app/controller/user.js
 * @Description    : 
 */
 
"use strict";
const Controller = require("egg").Controller;
class UserController extends Controller {
  /**
   * 查询  全部数据
   * @returns
   */
  async findAll() {
    const {ctx }= this;
    try {
      const query = {};
      const name = ctx.query.name;
      if (name) {
        query["name"] = {
          $regex: name,
          $options: "i",
        };
      }
      const options = {
        page: ctx.toInt(ctx.query.currentPage),
        limit: ctx.toInt(ctx.query.pageSize),
      };
      // await ctx.sleep(6000);
      const result = await ctx.model.User.paginate(query, options);
      ctx.api_success_data(result);
    } catch (error) {
      ctx.api_error_msg(error);
    }
  }
  /**
   * 查询  一条数据  的详细信息
   * @returns
   */
  async info() {
    const {ctx }= this;
    try {
      const id = ctx.params.id;
      const result = await ctx.model.User.findById().exec();
      ctx.api_success_data(result);
    } catch (error) {
      ctx.api_error_msg(error);
    }
  }
  /**
   * 创建  一条数据
   * @returns
   */
  async create() {
    const {ctx }= this;
    try {
      const { name, age } = ctx.request.body;
      const result = await ctx.model.User.create({ name, age });
      ctx.api_success_data(result);
    } catch (error) {
      ctx.api_error_msg(error);
    }
  }
  /**
   * 更新  一条数据
   * @returns
   */
  async update() {
    const {ctx }= this;
    try {
      const id = ctx.request.body.id;
      const user = await ctx.model.User.findById(id).exec();
      if (!user) {
        ctx.api_error_msg("找不到数据");
        return;
      }
      const { name, age } = ctx.request.body;
      const result = await user.update({ name, age });
      ctx.api_success_data(result);
    } catch (error) {
      ctx.api_error_msg(error);
    }
  }
  /**
   * 删除  一条数据
   * @returns
   */
  async destroy() {
    const {ctx }= this;
    try {
      const id = ctx.request.body.id;
      const user = await ctx.model.User.findById(id).exec();
      if (!user) {
        ctx.api_error_msg("找不到数据");
        return;
      }
      await user.destroy();
      ctx.api_success_data(result);
    } catch (error) {
      ctx.api_error_msg(error);
    }
  }
}
module.exports = UserController;
