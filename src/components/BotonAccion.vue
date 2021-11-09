<template>
  <button @click="accionBoton({ estado: estado, numero: 10 })">
    {{ textoBoton }}
  </button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    estado: Boolean,
  },
  computed: {
    textoBoton() {
      return this.estado ? "aumentar" : "disminuir";
    },
  },
  methods: {
    ...mapActions(["accionBoton"]),
  },
};
</script>
