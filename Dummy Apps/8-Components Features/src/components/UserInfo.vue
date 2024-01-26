<template>
  <section>
    <base-card>
    <!-- para determinar qué wrapper element del base-card quiero usar acá, agrego <template y v-slot: [con el name del slot q definí en BaseCard] -->
      <template v-slot:header>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>
      <!-- #default es la abreviacion de v-slot: directive -->
      <template #default>
        <p>{{ infoText }}</p>
      </template>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['fullName', 'infoText', 'role'],
};
</script>