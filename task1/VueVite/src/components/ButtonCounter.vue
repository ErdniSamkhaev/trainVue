<template>
  <button @click="increment">{{ label }}: {{ count }}</button>
</template>

<script setup>
import { ref } from "vue";

// Пропс label
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
});

// Внутренний счетчик копмонента
const count = ref(0);

function increment() {
  count.value++;
}
</script>

<style scoped></style>
