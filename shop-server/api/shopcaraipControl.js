//引入处理mysql的文件
const db = require("../mysql.js");
//引入获取当前时间的包
const moment = require("moment");
const LookUp = require("../sousuo");
class ShopCar {
  //请求添加商品到购物车
  async addshopcar(request, response, next) {
    let insertsql =
      "INSERT INTO `shopcar`(`src`,`name`,`count`,`price`,`time`,`id`) VALUES (?,?,?,?,?,?);";
    let checksql =
      "SELECT * from `shopcar`WHERE `src`=? AND `id`=? AND `state`=0;";
    let updatasql = "UPDATE `shopcar` SET `count`=`count`+1 WHERE `src`=? ; ";
    //传入两个参数
    let params = [
      request.body.src,
      request.body.name,
      request.body.count,
      request.body.price,
      moment().format("YYYY-MM-DD HH:mm:ss"), //通过moment包自动获取到当前时间
      request.body.id,
    ];
    let params1 = [request.body.src, request.body.id];
    console.log(params);
    try {
      let a = await db.exss(checksql, params1);
      if (a && a.length >= 1) {
        let result = await db.exss(updatasql, params);
        if (result && result.affectedRows >= 1) {
          response.json({
            code: 200,
            data: result,
            msg: "添加成功！",
          });
        } else {
          response.json({
            code: -200,
            msg: "添加失败！",
          });
        }
      } else {
        let result1 = await db.exss(insertsql, params);
        console.log(result1);
        if (result1 && result1.affectedRows >= 1) {
          response.json({
            code: 200,
            data: result1,
            msg: "添加成功！",
          });
        } else {
          response.json({
            code: -200,
            msg: "添加失败！",
          });
        }
      }
    } catch (err) {
      response.json({
        code: -200,
        msg: "服务器异常",
        err,
      });
    }
  }
  //请求用户个人购物车
  async setshopcar(request, response, next) {
    let insertsql = "SELECT * FROM `shopcar` WHERE `id`=? AND `state`=0;";
    //传入两个参数
    let params = [request.body.id];
    console.log(params);
    try {
      let result = await db.exss(insertsql, params);
      console.log(result);
      if (result && result.length >= 1) {
        response.json({
          code: 200,
          data: result,
          msg: "查询成功！",
        });
      } else {
        response.json({
          code: -200,
          msg: "查询失败！",
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
  //修改商品的数量
  async setcount(request, response, next) {
    let checksql = "UPDATE `shopcar` SET `count`=? WHERE `cid`=? ; ";
    let params = [request.body.count, request.body.id];
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
  //删除用户购物车记录（一条）
  async deleteone(request, response, next) {
    let deletesql = "DELETE FROM `shopcar` WHERE cid=?;";
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
  //删除用户所有购物车记录
  async deleteall(request, response, next) {
    let deletesql = "DELETE FROM `shopcar` WHERE `id`=?";
    let params = [request.body.id];
    console.log(request.body.id);
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
  //修改商品的状态
  async goodState(request, response, next) {
    let checksql = "UPDATE `shopcar` SET `state`=1,`did`=? WHERE `cid`=? ; ";
    let params = [request.body.did, request.body.id];
    console.log(request.body.did, request.body.id);
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
  //请求用户个人订单
  async setgoodOrder(request, response, next) {
    let insertsql = "SELECT * FROM `shopcar` WHERE `id`=? AND `state`>=1;";
    //传入两个参数
    let params = [request.body.id];
    console.log(params);
    try {
      let result = await db.exss(insertsql, params);
      console.log(result);
      if (result && result.length >= 1) {
        response.json({
          code: 200,
          data: result,
          msg: "查询成功！",
        });
      } else {
        response.json({
          code: -200,
          msg: "查询失败！",
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
  //搜索
  sousuo(request, response, next) {
    //传入用户搜索关键字
    let params = request.body.str;
    console.log(params);
    try {
      let result = LookUp.lookup(params);
      console.log(result);
      if (result && result.length >= 1) {
        response.json({
          code: 200,
          data: result,
          msg: "查询成功！",
        });
      } else {
        response.json({
          code: -200,
          msg: "查询失败！",
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
  //请求用户订单号
  async setOrderID(request, response, next) {
    let insertsql = "SELECT MAX(did) AS did FROM `shoporder`";
    //传入两个参数
    let params = [];
    console.log(params);
    try {
      let result = await db.exss(insertsql, params);
      console.log(result);
      if (result && result.length >= 1) {
        response.json({
          code: 200,
          data: result,
          msg: "查询成功！",
        });
      } else {
        response.json({
          code: -200,
          msg: "查询失败！",
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
  //请求添加订单记录
  async addOrder(request, response, next) {
    let insertsql =
      "INSERT INTO `shoporder`(`name`,`phone`,`address`,`num`,`time`) VALUES (?,?,?,?,?);";
    //传入两个参数
    let params = [
      request.body.name,
      request.body.phone,
      request.body.address,
      request.body.num,
      moment().format("YYYY-MM-DD HH:mm:ss"), //通过moment包自动获取到当前时间
    ];
    console.log(params);
    try {
      let result = await db.exss(insertsql, params);
      console.log(result);
      if (result && result.affectedRows >= 1) {
        response.json({
          code: 200,
          data: result,
          msg: "添加成功！",
        });
      } else {
        response.json({
          code: -200,
          msg: "添加失败！",
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
  //请求用户订单
  async Ordertable(request, response, next) {
    let insertsql = "SELECT * FROM `shoporder` WHERE `state`=0;";
    //传入两个参数
    let params = [];
    // console.log(params);
    try {
      let result = await db.exss(insertsql, params);
      console.log(result);
      if (result && result.length >= 1) {
        response.json({
          code: 200,
          data: result,
          msg: "查询成功！",
        });
      } else {
        response.json({
          code: -200,
          msg: "查询失败！",
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
  //请求用户详细订单
  async Ordergood(request, response, next) {
    let insertsql = "SELECT * FROM `shopcar` WHERE `did`=?;";
    //传入两个参数
    let params = [request.body.id];
    // console.log(params);
    try {
      let result = await db.exss(insertsql, params);
      console.log(result);
      if (result && result.length >= 1) {
        response.json({
          code: 200,
          data: result,
          msg: "查询成功！",
        });
      } else {
        response.json({
          code: -200,
          msg: "查询失败！",
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
  //删除订单记录（一条）
  async deletorder(request, response, next) {
    let deletesql = "DELETE FROM `shopcar` WHERE `did`=?;";
    let deletesql1 = "DELETE FROM `shoporder` WHERE `did`=?;";
    let params = [request.body.id];
    try {
      let result = await db.exss(deletesql, params);
      let result1 = await db.exss(deletesql1, params);
      console.log(result1);
      if (result && result.affectedRows >= 1) {
        response.json({
          code: 200,
          data: result1,
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
  //修改订单的状态
  async updataorder(request, response, next) {
    let checksql = "UPDATE `shoporder` SET `state`=1 WHERE `did`=? ; ";
    let checksql1 = "UPDATE `shopcar` SET `state`=2 WHERE `did`=? ; ";
    let params = [request.body.id];
    console.log(params);
    try {
      let result = await db.exss(checksql, params);
      let result1 = await db.exss(checksql1, params);
      console.log(result, result1);
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
      // if (result1 && result1.affectedRows >= 1) {
      //   response.json({
      //     code: 200,
      //     data: result1,
      //     msg: "修改成功！",
      //   });
      // } else {
      //   response.json({
      //     code: -200,
      //     msg: "修改失败！",
      //   });
      // }
    } catch (err) {
      response.json({
        code: -200,
        msg: "服务器异常",
        err,
      });
    }
  }
}
module.exports = new ShopCar();
