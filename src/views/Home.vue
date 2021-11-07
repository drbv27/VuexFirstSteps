<template>
  <div class="home">
    <!-- <h1>Mi Contador: {{ $store.state.contador }}</h1> -->
    <h1 :style="colorContador">{{ titulo }}: {{ contador }}</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {},
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
};
</script>
