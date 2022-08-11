import { createStore } from "vuex";
import user from "@/store/module/user.js";
import usertable from "@/store/module/usertable.js";
import shopuser from "@/store/module/shopuser.js";
import shoporder from "@/store/module/shoporder.js";
import orderGood from "@/store/module/orderGood.js";
import createPersistedState from "vuex-persistedstate";
export default createStore({
  modules: { user, usertable, shopuser, shoporder, orderGood },
  plugins: [
    //配置插件
    createPersistedState({
      //本地存储的名字
      key: "fengyuhoutai",
      //指定要存储的模块
      paths: ["user", "usertable", "shopuser", "shoporder", "orderGood"],
    }),
  ],
});
