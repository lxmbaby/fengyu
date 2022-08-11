import { orderGood } from "@/api/setlist.js";
export default {
  namespaced: true,
  state: {
    orderGoods: [],
  },
  mutations: {
    setordergood(state, payload) {
      state.orderGoods = payload;
    },
  },
  actions: {
    async getordergood({ commit }, id) {
      let ordergood = await orderGood(id);
      console.log(id);
      console.log(ordergood);
      commit("setordergood", ordergood);
    },
  },
};
