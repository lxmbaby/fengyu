import { list } from "@/api/setlist.js";
export default {
  namespaced: true,
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
    setFirstClass(state, id) {
      let newid = Number(id);
      let menu = state.goodList.find((item) => item.gid === newid);
      console.log(menu);
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
};
