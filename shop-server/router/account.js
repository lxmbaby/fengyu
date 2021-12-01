//创建路由
const express = require("express");
let router = express.Router();
//相当于二级路由
//首页响应
router.post("/login", require("../api/apiControl.js").login);
router.post("/register", require("../api/apiControl.js").register);
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

module.exports = router;
