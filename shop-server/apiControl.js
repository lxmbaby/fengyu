//引入处理mysql的文件
const db = require("./mysql.js");
// const moment = require("moment");
const jwt = require("jwt-simple");
class AccountConfig {
  //登录请求
  async login(request, response, next) {
    //传入两个参数
    let params = [request.body.name, request.body.password];
    let loginsql =
      "SELECT `r-name`,`r-password`,`r-identity` FROM `userregister` WHERE `r-name`=? AND `r-password`=? AND `r-state`=1;";
    try {
      let result = await db.exss(loginsql, params);
      console.log(result);
      if (result && result.length >= 1) {
        response.json({
          code: 200,
          data: result[0],
          msg: "登录成功！",
          token: createToken(result[0]),
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
          require("./config/index").tokenKey
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
  //请求类目
  goodlist(request, response, next) {
    try {
      let result = require("./json/nav.json");
      console.log(result);
      if (result && result.length >= 1) {
        response.send({
          code: 200,
          data: result,
          msg: "读取成功！",
        });
      } else {
        response.end({
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
  //请求轮播图图片
  carousel(request, response, next) {
    try {
      let result = require("./json/carousel.json");
      console.log(result);
      if (result && result.length >= 1) {
        response.send({
          code: 200,
          data: result,
          msg: "读取成功！",
        });
      } else {
        response.end({
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
  // 请求新鲜好物图片
  new(request, response, next) {
    try {
      let result = require("./json/new.json");
      console.log(result);
      if (result && result.length >= 1) {
        response.send({
          code: 200,
          data: result,
          msg: "读取成功！",
        });
      } else {
        response.end({
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
  // 请求人气推荐图片
  hot(request, response, next) {
    try {
      let result = require("./json/hot.json");
      console.log(result);
      if (result && result.length >= 1) {
        response.send({
          code: 200,
          data: result,
          msg: "读取成功！",
        });
      } else {
        response.end({
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
  //请求热门品牌图片
  brand(request, response, next) {
    try {
      let result = require("./json/brand.json");
      console.log(result);
      if (result && result.length >= 1) {
        response.send({
          code: 200,
          data: result,
          msg: "读取成功！",
        });
      } else {
        response.end({
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
  //请求商品展示模块数据
  goods(request, response, next) {
    try {
      let result = require("./json/good.json");
      console.log(result);
      if (result && result.length >= 1) {
        response.send({
          code: 200,
          data: result,
          msg: "读取成功！",
        });
      } else {
        response.end({
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
  //请求最新专题数据
  special(request, response, next) {
    try {
      let result = require("./json/special.json");
      console.log(result);
      if (result && result.length >= 1) {
        response.send({
          code: 200,
          data: result,
          msg: "读取成功！",
        });
      } else {
        response.end({
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
}

module.exports = new AccountConfig();
