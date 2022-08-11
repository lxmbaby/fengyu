//创建路由
const express = require("express");
let router = express.Router();
//相当于二级路由
//首页响应
router.post("/login", require("../api/apiControl.js").login);
router.post("/register", require("../api/apiControl.js").register);
router.post("/reset", require("../api/apiControl.js").reset);
router.post("/goodlist", require("../api/apiControl.js").goodlist);
router.post("/carousel", require("../api/apiControl.js").carousel);
router.post("/new", require("../api/apiControl.js").new);
router.post("/hot", require("../api/apiControl.js").hot);
router.post("/brand", require("../api/apiControl.js").brand);
router.post("/goods", require("../api/apiControl.js").goods);
router.post("/special", require("../api/apiControl.js").special);
//一级类页响应
router.post("/carouselOne", require("../api/apiControlOne.js").carouselOne);
router.post("/hotOne", require("../api/apiControlOne.js").hotOne);
router.post("/boutique", require("../api/apiControlOne.js").boutique);
//二级类响应
router.post("/secondlist", require("../api/apiControlTwo.js").secondlist);
//操作后台用户数据请求
router.post("/loginback", require("../api/userapiControl.js").loginback);
router.post("/registerback", require("../api/userapiControl.js").register);
router.post("/resetback", require("../api/userapiControl.js").reset);
router.post("/user", require("../api/userapiControl.js").user);
router.post("/del", require("../api/userapiControl.js").deleteUser);
router.post("/update", require("../api/userapiControl.js").update);
router.post("/updateState", require("../api/userapiControl.js").updateState);
router.post(
  "/updateIdentity",
  require("../api/userapiControl.js").updateIdentity
);
//操作商城用户数据请求
router.post("/shopuser", require("../api/shopuserapiControls").shopUser);
router.post("/delete", require("../api/shopuserapiControls").deleteUser);
router.post("/updateuser", require("../api/shopuserapiControls").updateuser);
router.post("/updatestate", require("../api/shopuserapiControls").updateState);
//操作用户订单请求
router.post("/order", require("../api/shopcaraipControl").Ordertable);
//购物车响应
router.post("/addshopcar", require("../api/shopcaraipControl").addshopcar);
router.post("/goodcar", require("../api/shopcaraipControl").setshopcar);
router.post("/changeCount", require("../api/shopcaraipControl").setcount);
router.post("/deleteone", require("../api/shopcaraipControl").deleteone);
router.post("/deleteall", require("../api/shopcaraipControl").deleteall);
router.post("/goodState", require("../api/shopcaraipControl").goodState);
router.post("/goodOrder", require("../api/shopcaraipControl").setgoodOrder);
router.post("/sousuo", require("../api/shopcaraipControl").sousuo);
router.post("/setOrderID", require("../api/shopcaraipControl").setOrderID);
router.post("/addOrder", require("../api/shopcaraipControl").addOrder);
router.post("/ordergood", require("../api/shopcaraipControl").Ordergood);
router.post("/deleteorder", require("../api/shopcaraipControl").deletorder);
router.post("/updataorder", require("../api/shopcaraipControl").updataorder);
module.exports = router;
