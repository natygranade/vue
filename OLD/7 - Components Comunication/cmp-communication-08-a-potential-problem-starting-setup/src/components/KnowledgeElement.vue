<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <p>{{ fullText }}</p>
    <!-- en click se ejecuta custom event, donde se envia el id del topic al parent -->
    <button @click="$emit('select-topic', id)">Learn More</button>
  </li>
</template>

<script>
export default {
  props: ['id', 'topicName', 'description', 'fullText'],
  emits: ['select-topic'],
};
</script>