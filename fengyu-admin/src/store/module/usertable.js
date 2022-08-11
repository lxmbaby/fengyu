import { usertable } from "@/api/setlist.js";
export default {
  namespaced: true,
  state: {
    userList: [],
  },
  mutations: {
    settable(state, payload) {
      state.userList = payload;
    },
  },
  actions: {
    async gettable({ commit }) {
      let table = await usertable();
      console.log(table);
      commit("settable", table);
    },
  },
};
