import { createStore } from "vuex";
import user from "@/store/module/user.js";
import nav from "@/store/module/nav.js";
import firstClass from "@/store/module/firstClass.js";
import createPersistedState from "vuex-persistedstate";
export default createStore({
  modules: { user, nav, firstClass },
  plugins: [
    //配置插件
    createPersistedState({
      //本地存储的名字
      key: "fengyu",
      //指定要存储的模块
      paths: ["user", "nav", "firstClass"],
    }),
  ],
});
