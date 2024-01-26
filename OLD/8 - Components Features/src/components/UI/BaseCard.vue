<template>
  <div>
    <!-- si en el comp no se usa el slot #header, no se renderiza  -->
    <header v-if="$slots.header">
<!-- si uso > 1 slot, tengo q agregar el atr "name", con cualquier nombre q identifique q el wrapper de ese contenido html será esta tag <header>-->
      <slot name="header">
<!-- si no hay contenido, donde se use este slot, se imprimirá este h2 -->
         <h2>The Default</h2>
      </slot>
    </header>
<!-- solo se puede dejar un slot sin nombre, y será el default -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    // $slots devuelve info sobre el slot, en este caso el slot name="header"
    console.log(this.$slots.header);
  }
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>