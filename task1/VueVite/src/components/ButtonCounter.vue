<template>
  <!-- Кнопка и обрабатываем клик 'v-on:click'- сокращенно @click -->
  <button @click="handleClick">
    {{ label }}: {{ counterStore.count }}
    <!-- Именнованный слот для кастомного компонента -->
    <slot name="icon"></slot>
  </button>
</template>

<!-- composition API -->
<script setup lang="ts">
// Импорты
// useCounterStore функция создания экземпляра хранилища
import { useCounterStore } from "../stores/counter";

// Пропс label (сторока обязательная)
defineProps<{
  label: string;
}>();

// Типизация эмитов
const emit = defineEmits<{
  (e: "increment", count: number): void;
}>();

// Типизация слотов
defineSlots<{
  icon?: (props: {}) => any;
}>();

// Получаем ссылку на хранилище
const counterStore = useCounterStore();

// Функция вызывает метод increment из хранилища
// которая автоматически обновляет реактивную переменную count
function handleClick() {
  counterStore.increment();
  emit("increment", counterStore.count);
}
</script>

<style scoped lang="scss">

button {
  @include button-style($primary-color);
}
</style>
