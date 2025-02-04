<template>
  <button @click="handleClick">
    {{ label }}: {{ count }}
    <!-- Именнованный слот для кастомного компонента -->
    <slot name="icon"></slot>
  </button>
</template>

<script setup>
// Импорты
import { ref } from "vue";

// Пропс label
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
});

// Определяем событие increment через defineEmits
const emit = defineEmits(["increment"]);
// Внутренний счетчик копмонента
const count = ref(0);

// Функция обработки клика
// увеличиваем счетчик и эмитим событие increment с текущим значением
function handleClick() {
  count.value++;
  emit("increment", count.value);
}
</script>

<style scoped></style>
