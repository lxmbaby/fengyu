class FirstClass {
  //请求轮播图图片
  carouselOne(request, response, next) {
    try {
      let result = require("../jsonOne/carouselOne.json");
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
  //请求热卖商品数据
  hotOne(request, response, next) {
    try {
      let result = require("../jsonOne/hotOne.json");
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

  //请求特色精品数据
  boutique(request, response, next) {
    try {
      let result = require("../jsonOne/boutique.json");
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
module.exports = new FirstClass();
