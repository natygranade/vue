<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
<!-- para pasar data de este cmp al cmp donde defino el slot (BaseCard): v-bind:[nomre de atr q elija]= "[data q quiero enviar]".
Tmb puedo enviar otros atr que no esten vinculados a una data prop-->
      <slot :item="goal" another-prop="..lorem."></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ['Finish the course', 'Learn Vue'],
    };
  },
};
</script>

