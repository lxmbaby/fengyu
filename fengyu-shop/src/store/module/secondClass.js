import { secondlist } from "@/api/classTwo.js";
export default {
  namespaced: true,
  state: {
    secondList: [],
  },
  mutations: {
    setSecond(state, payload) {
      state.secondList = payload;
    },
  },
  actions: {
    async getSecond({ commit }) {
      let second = await secondlist();
      commit("setSecond", second);
    },
  },
};
