/*
 * @Date           : 2022-03-13 01:32:11
 * @FilePath       : /jinnian-cms-server/app/extend/context.js
 * @Description    :
 */

// https://www.eggjs.org/zh-CN/basics/extend#context
// this 就是 ctx 对象，在其中可以调用 ctx 上的其他方法，或访问属性
module.exports = {
  /**
   * API 成功返回体 封装
   * @param {*} param
   */
  api_success(param) {
    let { code = "000000", msg = "succcess", data = "" } = params;

    this.body = {
      code,
      data,
      msg,
      success: true,
    };
  },
  /**
   * API 成功返回体 封装
   * @param {*} data
   */
  api_success_data(data = "") {
    this.api_success({ data });
  },
  /**
   * API 错误返回体 封装
   * @param {*} param
   */
   api_error(param) {
    let { code = "-1", msg = "error", data = "" } = params;

    this.body = {
      code,
      data,
      msg,
      success: false,
    };
  },

  /**
   * API 错误返回体 封装
   * @param {*} msg
   */
   api_error_msg(msg = "") {
    this.api_error({ msg });
  },
 /**
  * 转为数字 
  * @param {*} str 
  * @returns 
  */
  toInt(str) {
    if (typeof str === 'number') return str;
    if (!str) return str;
    return parseInt(str, 10) || 0;
  }
};
