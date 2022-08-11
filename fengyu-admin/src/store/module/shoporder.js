import { shoporder } from "@/api/setlist.js";
export default {
  namespaced: true,
  state: {
    order: [],
  },
  mutations: {
    setorder(state, payload) {
      state.order = payload;
    },
  },
  actions: {
    async getorder({ commit }) {
      let orders = await shoporder();
      console.log(orders);
      commit("setorder", orders);
    },
  },
};
