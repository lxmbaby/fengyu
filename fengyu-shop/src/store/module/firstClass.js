import { carouselOne, hotOne, bouOne } from "@/api/classOne.js";
export default {
  namespaced: true,
  state: {
    imgList: [],
    hotList: [],
    bouList: [],
  },
  mutations: {
    setImg(state, payload) {
      state.imgList = payload;
    },
    setHot(state, payload) {
      state.hotList = payload;
    },
    setBou(state, payload) {
      state.bouList = payload;
    },
  },
  actions: {
    async getImg({ commit }) {
      let img = await carouselOne();
      console.log(img);
      commit("setImg", img);
    },
    async getHot({ commit }) {
      let hot = await hotOne();
      console.log(hot);
      commit("setHot", hot);
    },
    async getBou({ commit }) {
      let bou = await bouOne();
      console.log(bou);
      commit("setBou", bou);
    },
  },
};
