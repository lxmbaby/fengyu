import { usershoptable } from "@/api/setlist.js";
export default {
  namespaced: true,
  state: {
    shopuserList: [],
  },
  mutations: {
    setshopuser(state, payload) {
      state.shopuserList = payload;
    },
  },
  actions: {
    async getshoptable({ commit }) {
      let shoptable = await usershoptable();
      console.log(shoptable);
      commit("setshopuser", shoptable);
    },
  },
};
