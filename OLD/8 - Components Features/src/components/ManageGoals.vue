<template>
  <h2>Manage Goals</h2>
  <input type="text" ref="goal" />
  <button @click="setGoal">Set Goal</button>
  <!-- teleport sirve para enviar un elemento al final dentro de otro elemento del dom, por una razon de accesibilidad y evitar errores de style, es mejor dejar el dialog, dentro del div principal de la app. Puedo poner cualquier css selector como value de to="#final" -->
  <teleport to="body">
    <!-- si inputIsInvalid es true, muestro el cmp wrapper error-alert -->
    <error-alert v-if="inputIsInvalid">
      <h2>Input is invalid!</h2>
      <p>Please enter at least a few characters...</p>
      <button @click="confirmError">Okay</button>
    </error-alert>
  </teleport>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';

export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoal() {
      // si el value del input esta vacio al clickear set goal, inputIsInvalid pasa a true
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === '') {
        this.inputIsInvalid = true;
      }
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>