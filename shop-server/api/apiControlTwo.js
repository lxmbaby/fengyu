class SecondClass {
  //请求二级类数据
  secondlist(request, response, next) {
    try {
      let result = require("../jsonTwo/secondGood.json");
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
module.exports = new SecondClass();
