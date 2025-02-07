<template>
  <button @click="handleClick">
    {{ label }}: {{ counterStore.count }}
    <!-- Именнованный слот для кастомного компонента -->
    <slot name="icon"></slot>
  </button>
</template>

<script setup lang="ts">
// Импорты
import { useCounterStore } from "../stores/counter";

// Пропс label (сторока обязательная)
defineProps<{
  label: string;
}>();

// Типизация эмитов
defineEmits<{
  increment: [count: number];
}>();

// Типизация слотов
defineSlots<{
  icon?: (props: {}) => any;
}>();

// Получаем ссылку на хранилище
const counterStore = useCounterStore();

// Функция обработки клика
// увеличиваем счетчик и эмитим событие increment с текущим значением
function handleClick() {
  counterStore.increment();
}
</script>

<style scoped></style>
