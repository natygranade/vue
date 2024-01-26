<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
      :fullText = "topic.fullText"
      @select-topic="$emit('select-topic', $event)"
    ></knowledge-element>
    <!-- cuando de ejecute el custom event en el child, se envia el id al parent del parent, y  toda la data del evento -->
  </ul>
</template>

<script>
export default {
  props: ['topics'],
  emits: ['select-topic']
};
</script>