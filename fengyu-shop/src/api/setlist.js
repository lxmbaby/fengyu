import axios from "axios";
//获取用户登录信息
export const user = async (account, password) => {
  const { data: res } = await axios.post("/shopping/login", {
    account: account,
    password: password,
  });
  // res.data.token = res.token;
  console.log(res);
  return res.data;
};
// 获取菜单信息
export const list = async () => {
  const { data: res } = await axios.post("/shopping/goodlist");
  console.log(res);
  return res.data;
};
// 获取轮播图图片
export const carouselList = async () => {
  const { data: res } = await axios.post("/shopping/carousel");
  console.log(res);
  return res.data;
};
//获取新鲜好物图片
export const newList = async () => {
  const { data: res } = await axios.post("/shopping/new");
  console.log(res);
  return res.data;
};
//获取人气推荐图片
export const hotList = async () => {
  const { data: res } = await axios.post("/shopping/hot");
  console.log(res);
  return res.data;
};
//获取热门品牌图片
export const brandList = async () => {
  const { data: res } = await axios.post("/shopping/brand");
  return res.data;
};
//获取商品展示区数据
export const goods = async () => {
  const { data: res } = await axios.post("/shopping/goods");
  return res.data;
};
//获取最新专题数据
export const special = async () => {
  const { data: res } = await axios.post("/shopping/special");
  return res.data;
};
