//创建路由
const express = require("express");
let router = express.Router();
//相当于二级路由
router.post("/login", require("../apiControl.js").login);
router.post("/goodlist", require("../apiControl.js").goodlist);
router.post("/carousel", require("../apiControl.js").carousel);
router.post("/new", require("../apiControl.js").new);
router.post("/hot", require("../apiControl.js").hot);
router.post("/brand", require("../apiControl.js").brand);
router.post("/goods", require("../apiControl.js").goods);
router.post("/special", require("../apiControl.js").special);
module.exports = router;
