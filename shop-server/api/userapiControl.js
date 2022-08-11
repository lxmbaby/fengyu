//引入处理mysql的文件
const db = require("../mysql");
const moment = require("moment");
const jwt = require("jwt-simple");
class AccountConfig {
  //登录请求
  async loginback(request, response, next) {
    //传入两个参数
    let params = [request.body.account, request.body.password];
    let loginsql =
      "SELECT * FROM `manageuser` WHERE `account`=? AND `password`=? AND `state`=1;";
    try {
      let result = await db.exss(loginsql, params);
      console.log(result);
      if (result && result.length >= 1) {
        result[0].token = createToken(result[0]);
        response.json({
          code: 200,
          data: result[0],
          msg: "登录成功！",
        });
      } else {
        response.json({
          code: -200,
          msg: "登录失败！",
        });
      }
      //登录成功调用函数自动生成一个token
      function createToken(data) {
        return jwt.encode(
          {
            exp: Date.now() + 1000 * 60 * 60 * 24,
            info: data,
          },
          require("../config/index").tokenKey
        );
      }
    } catch (err) {
      response.json({
        code: -200,
        msg: "服务器异常",
        err,
      });
    }
  }
  //注册请求
  async register(request, response, next) {
    let insertsql =
      "INSERT INTO `manageuser`(`name`,`password`,`account`,`phone`,`time`) VALUES (?,?,?,?,?);";
    //传入两个参数
    let params = [
      request.body.name,
      request.body.password,
      request.body.account,
      request.body.phone,
      moment().format("YYYY-MM-DD HH:mm:ss"), //通过moment包自动获取到当前时间
    ];
    try {
      let result = await db.exss(insertsql, params);
      console.log(result);
      if (result && result.affectedRows >= 1) {
        response.json({
          code: 200,
          data: result,
          msg: "注册成功！",
        });
      } else {
        response.json({
          code: -200,
          msg: "注册失败！",
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
  //重置请求
  async reset(request, response, next) {
    let insertsql = "UPDATE `manageuser` SET `password`=? WHERE account=?";
    //传入两个参数
    let params = [request.body.password, request.body.account];
    console.log(params);
    try {
      let result = await db.exss(insertsql, params);
      console.log(result);
      if (result && result.affectedRows >= 1) {
        response.json({
          code: 200,
          data: result,
          msg: "重置成功！",
        });
      } else {
        response.json({
          code: -200,
          msg: "重置失败！",
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
  //请求用户基本信息表
  async user(request, response, next) {
    let checksql = "SELECT * FROM  `manageuser`;";
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
    let deletesql = "DELETE FROM `manageuser`   WHERE `id`=?;";
    let params = [request.body.id];
    try {
      let result = await db.exss(deletesql, params);
      console.log(result);
      if (result && result.affectedRows >= 1) {
        response.json({
          code: 200,
          data: result,
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
  async update(request, response, next) {
    let checksql =
      "UPDATE `manageuser` SET `name`=?,`password`=?,`phone`=? WHERE `account`=? ; ";
    let params = [
      request.body.name,
      request.body.password,
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
    let checksql = "UPDATE `manageuser` SET `state`=? WHERE `id`=? ; ";
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
  //修改用户身份状态
  async updateIdentity(request, response, next) {
    let checksql = "UPDATE `manageuser` SET `identity`=? WHERE `id`=? ; ";
    let params = [request.body.identity, request.body.id];
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
