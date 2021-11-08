import { createStore } from "vuex";

export default createStore({
  state: {
    contador: 170,
  },
  mutations: {
    incrementar(state) {
      state.contador = state.contador + 10;
    },
    disminuir(state, payload) {
      //payload es un nombre ms estandar para numero
      state.contador = state.contador - payload;
    },
  },
  actions: {
    accionIncrementar({ commit }) {
      commit("incrementar");
    },
    accionDisminuir({ commit }, numero) {
      commit("disminuir", numero);
    },
  },
  modules: {},
});
