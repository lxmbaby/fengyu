import axios from "axios";
//获取用户登录信息
export const user = async (account, password) => {
  const { data: res } = await axios.post("/shopping/loginback", {
    account: account,
    password: password,
  });
  // res.data.token = res.token;
  console.log(res);
  return res.data;
};
//获取后台用户表
export const usertable = async () => {
  const { data: res } = await axios.post("/shopping/user");
  console.log(res);
  return res.data;
};
//获取前台用户表
export const usershoptable = async () => {
  const { data: res } = await axios.post("/shopping/shopuser");
  console.log(res);
  return res.data;
};
//获取用户订单表
export const shoporder = async () => {
  const { data: res } = await axios.post("/shopping/order");
  console.log(res);
  return res.data;
};
//获取用户详细订单表
export const orderGood = async (id) => {
  console.log(id);
  const { data: res } = await axios.post("/shopping/ordergood", { id: id });
  console.log(res);
  return res.data;
};
