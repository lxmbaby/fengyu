import axios from "axios";
//获取用户登录信息
export const goodcar = async (id) => {
  const { data: res } = await axios.post("/shopping/goodcar", { id: id });
  console.log(res);
  return res.data;
};
//获取用户订单信息
export const goodOrder = async (id) => {
  const { data: res } = await axios.post("/shopping/goodOrder", { id: id });
  console.log(res);
  return res.data;
};
//获取查询到的商品新鲜
export const sousuo = async (str) => {
  const { data: res } = await axios.post("/shopping/sousuo", { str: str });
  console.log(res);
  return res.data;
};
