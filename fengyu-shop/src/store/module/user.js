import { user } from "@/api/setlist.js";
export default {
  namespaced: true,
  state: {
    profile: [],
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
  },
  actions: {
    async getUser({ commit }, { account, password }) {
      console.log(account, password);
      let users = await user(account, password);
      console.log(users);
      commit("setUser", users);
    },
  },
};
