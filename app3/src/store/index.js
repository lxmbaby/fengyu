import { createStore } from "vuex";
import { list, user } from "@/api/setlist.js";
export default createStore({
  state: {
    profile: [],
    goodList: [],
  },
  mutations: {
    setData(state) {
      state.profile = [];
    },
    setUser(state, payload) {
      console.log(payload);
      state.profile = payload;
      console.log(state.profile);
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
    async getUser({ commit }, { account, password }) {
      console.log(account, password);
      let users = await user(account, password);
      console.log(users);
      commit("setUser", users);
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
