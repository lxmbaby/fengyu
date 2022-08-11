import axios from "axios";
// 获取轮播图图片
export const secondlist = async () => {
  const { data: res } = await axios.post("/shopping/secondlist");
  console.log(res);
  return res.data;
};
