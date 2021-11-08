<template>
  <div class="home">
    <!-- <h1>Mi Contador: {{ $store.state.contador }}</h1> -->
    <h1 :style="colorContador">{{ titulo }}: {{ contador }}</h1>
    <button @click="accionIncrementar">Incrementar</button>
    <BtnDisminuir />
    <hr />
    <BotonAccion :estado="true" />
    <BotonAccion :estado="false" />
  </div>
</template>

<script>
import BtnDisminuir from "../components/BtnDisminuir.vue";
import BotonAccion from "../components/BotonAccion.vue";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "Home",
  components: {
    BtnDisminuir,
    BotonAccion,
  },
  data() {
    return {
      titulo: "Mi Contador Vuex",
    };
  },
  computed: {
    ...mapState(["contador"]),
    colorContador() {
      return [this.contador > 100 ? { color: "green" } : { color: "red" }];
    },
  },
  methods: {
    ...mapMutations(["incrementar"]), //no se recomienda
    ...mapActions(["accionIncrementar"]),
  },
};
</script>
