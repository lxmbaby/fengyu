import { goodcar, goodOrder, sousuo } from "@/api/setcar.js";
export default {
  namespaced: true,
  state: {
    carlist: [],
    orderlist: [],
    querylist: [],
  },
  mutations: {
    setCar(state, payload) {
      state.carlist = payload;
      console.log(state.carlist);
    },
    setOrder(state, payload) {
      state.orderlist = payload;
      console.log(state.orderlist);
    },
    setQuery(state, payload) {
      state.querylist = payload;
      console.log(state.querylist);
    },
  },
  actions: {
    async getCar({ commit }, { id }) {
      let car = await goodcar(id);
      if (!car) {
        car = [];
      } else {
        car.forEach((item) => {
          item.ischeck = false;
        });
      }
      console.log(car);
      commit("setCar", car);
    },
    async getOrder({ commit }, { id }) {
      let order = await goodOrder(id);
      console.log(order);
      commit("setOrder", order);
    },
    async getQuery({ commit }, { str }) {
      let query = await sousuo(str);
      console.log(query);
      commit("setQuery", query);
    },
  },
};
