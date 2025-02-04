<template>
  <button @click="handleClick">
    {{ label }}: {{ counterStore.count }}
    <!-- Именнованный слот для кастомного компонента -->
    <slot name="icon"></slot>
  </button>
</template>

<script setup>
// Импорты
import { useCounterStore } from "../stores/counter";

// Пропс label
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
});

// Определяем событие increment через defineEmits
const emit = defineEmits(["increment"]);

// Получаем ссылку на хранилище
const counterStore = useCounterStore();

// Функция обработки клика
// увеличиваем счетчик и эмитим событие increment с текущим значением
function handleClick() {
  counterStore.increment();
  emit("increment", counterStore.count);
}
</script>

<style scoped></style>
