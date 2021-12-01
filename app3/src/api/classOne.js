import axios from "axios";
// 获取轮播图图片
export const carouselOne = async () => {
  const { data: res } = await axios.post("/shopping/carouselOne");
  console.log(res);
  return res.data;
};
// 获取热卖商品
export const hotOne = async () => {
  const { data: res } = await axios.post("/shopping/hotOne");
  console.log(res);
  return res.data;
};
//获取特色精品
export const bouOne = async () => {
  const { data: res } = await axios.post("/shopping/boutique");
  console.log(res);
  return res.data;
};
