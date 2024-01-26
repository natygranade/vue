<!-- este cmp solo sera la ventana de dialogo como wrapper, el texto de adentro estara en el cmp donde se use el slot -->
<template>
  <!-- open es un atr del tag dialog de html, q le dice al dom q está abirto para interactuar y ser mostrado en pantalla. En este caso lo dejamos abierto siempre, ya q lo voy a ocultar de otra manera, con vue. Sino podria hacer un toggle open/close -->
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<style scoped>
dialog {
  margin: 0;
  position: fixed;
  top: 20vh;
  left: 30%;
  width: 40%;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>