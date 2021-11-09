import { createStore } from "vuex";

export default createStore({
  state: {
    contador: 170,
  },
  mutations: {
    incrementar(state, payload) {
      state.contador = state.contador + payload;
    },
    disminuir(state, payload) {
      //payload es un nombre ms estandar para numero
      state.contador = state.contador - payload;
    },
  },
  actions: {
    accionIncrementar({ commit }) {
      commit("incrementar", 10);
    },
    accionDisminuir({ commit }, numero) {
      commit("disminuir", numero);
    },
    accionBoton({ commit }, objeto) {
      if (objeto.estado) {
        commit("incrementar", objeto.numero);
      } else {
        commit("disminuir", objeto.numero);
      }
    },
  },
  modules: {},
});
