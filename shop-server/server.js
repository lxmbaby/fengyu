//创建服务器
const express = require("express");
const cors = require("cors");
const port = 8082;
const hostname = "127.0.0.1";
const server = express();
//cors开启跨域资源共享
server.use(cors());
//解析URL—encoded格式的请求体数据
server.use(express.urlencoded({ extended: false }));
//解析表单中的json格式的数据
server.use(express.json());
//一级路由
server.use("/shopping", require("./router/account.js"));
server.listen(port, hostname, () => {
  console.log("服务器启动成功！");
});
