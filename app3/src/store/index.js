import { createStore } from "vuex";
import { list } from "@/api/setlist.js";
export default createStore({
  state: {
    profile: {
      id: "",
      username: "",
      account: "",
      mobile: "",
      token: "",
    },
    goodList: [],
  },
  mutations: {
    setUser(state, payload) {
      state.profile = payload;
    },
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
    async getUser({ commit }, name, password) {
      let user = await user(name, password);
      console.log(user);
      commit("setUser", user);
    },
    async getlist({ commit }) {
      let goodlist = await list();
      goodlist.forEach((item) => {
        item.open = false;
      });
      console.log(goodlist);
      commit("setlist", goodlist);
    },
  },
  modules: {},
});
