<template>
  <section>
    <h2>Select a Topic</h2>
    <!-- cuando de ejecute el custom event en el child, se envia el id al parent del parent, y  toda la data del evento. Knowledge-grid y kn-base, son intermediarios. -->
    <knowledge-grid :topics="topics" @select-topic="$emit('select-topic', $event)"></knowledge-grid>
  </section>
</template>

<script>
export default {
  props: ['topics'],
  emits: ['select-topic'],
};
</script>