import { createStore } from "vuex";
import { list } from "@/api/setlist.js";
import user from "@/store/module/user.js";
import createPersistedState from "vuex-persistedstate";
export default createStore({
  state: {
    goodList: [],
  },
  mutations: {
    setlist(state, payload) {
      state.goodList = payload;
    },
    show(state, id) {
      const showlist = state.goodList.find((item) => item.gid === id);
      showlist.open = true;
    },
    hide(state, id) {
      const hidelist = state.goodList.find((item) => item.gid === id);
      hidelist.open = false;
    },
  },
  actions: {
    async getlist({ commit }) {
      let goodlist = await list();
      goodlist.forEach((item) => {
        item.open = false;
      });
      console.log(goodlist);
      commit("setlist", goodlist);
    },
  },
  modules: { user },
  plugins: [
    //配置插件
    createPersistedState({
      //本地存储的名字
      key: "fengyu",
      //指定要存储的模块
      paths: ["user"],
    }),
  ],
});
