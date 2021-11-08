// 连接数据库
const mysql = require("mysql");
const pool = mysql.createPool(require("./config/index.js").dev);
module.exports.exss = (sql, params, callback) => {
  if (typeof callback == "function") {
    pool.getConnection((err, connect) => {
      if (err) {
        console.log("连接数据库失败！");
        connect.release();
      }
      connect.query(sql, params, (err, result, fields) => {
        if (err) {
          connect.release();
          console.log("执行sql语句失败！");
          return;
        }
        callback(result, fields);
        connect.release();
      });
    });
  } else {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connect) => {
        if (err) {
          connect.release();
          reject(err);
        } else {
          connect.query(sql, params, (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
              console.log(result);
            }
          });
          connect.release();
        }
      });
    });
  }
};
