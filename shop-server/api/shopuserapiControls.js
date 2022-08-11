//引入处理mysql的文件
const db = require("../mysql.js");
const moment = require("moment");
const jwt = require("jwt-simple");
class AccountConfig {
  //请求用户基本信息表
  async shopUser(request, response, next) {
    let checksql = "SELECT * FROM  `shopuser`;";
    let params = [];
    try {
      let result = await db.exss(checksql, params);
      console.log(result);
      if (result && result.length >= 1) {
        response.json({
          code: 200,
          data: result,
          msg: "读取成功！",
        });
      } else {
        response.json({
          code: -200,
          msg: "读取失败！",
        });
      }
    } catch (err) {
      response.json({
        code: -200,
        msg: "服务器异常",
        err,
      });
    }
  }
  //删除用户数据请求
  async deleteUser(request, response, next) {
    let deletesql1 = "DELETE FROM `shopcar` WHERE id=?;";
    let deletesql2 = "DELETE FROM `shoporder` WHERE name=?;";
    let deletesql3 = "DELETE FROM `shopuser` WHERE id=?;";
    let params1 = [request.body.id];
    let params2 = [request.body.name];
    console.log(params2);
    try {
      let result1 = await db.exss(deletesql1, params1);
      let result2 = await db.exss(deletesql2, params2);
      let result3 = await db.exss(deletesql3, params1);
      console.log(result1, result2, result3);
      if (result3 && result3.affectedRows >= 1) {
        response.json({
          code: 200,
          data: result3,
          msg: "删除成功！",
        });
      } else {
        response.json({
          code: -200,
          msg: "删除失败！",
        });
      }
    } catch (err) {
      response.json({
        code: -200,
        msg: "服务器异常",
        err,
      });
    }
  }
  //修改用户详细信息
  async updateuser(request, response, next) {
    let checksql =
      "UPDATE `shopuser` SET `name`=?,`password`=?,`address`=?,`phone`=? WHERE `account`=? ; ";
    let params = [
      request.body.name,
      request.body.password,
      request.body.address,
      request.body.phone,
      request.body.account,
    ];
    try {
      let result = await db.exss(checksql, params);
      console.log(result);
      if (result && result.affectedRows >= 1) {
        response.json({
          code: 200,
          data: result,
          msg: "修改成功！",
        });
      } else {
        response.json({
          code: -200,
          msg: "修改失败！",
        });
      }
    } catch (err) {
      response.json({
        code: -200,
        msg: "服务器异常",
        err,
      });
    }
  }
  //修改用户账号状态
  async updateState(request, response, next) {
    let checksql = "UPDATE `shopuser` SET `state`=? WHERE `id`=? ; ";
    let params = [request.body.state, request.body.id];
    try {
      let result = await db.exss(checksql, params);
      console.log(result);
      if (result && result.affectedRows >= 1) {
        response.json({
          code: 200,
          data: result,
          msg: "修改成功！",
        });
      } else {
        response.json({
          code: -200,
          msg: "修改失败！",
        });
      }
    } catch (err) {
      response.json({
        code: -200,
        msg: "服务器异常",
        err,
      });
    }
  }
}

module.exports = new AccountConfig();
