<template>
  <!-- Тег h2 и интерполяция {{ name }} -->
  <!-- name - реактивная переменная из props -->
  <h2>Hello, {{ name }}</h2>
</template>

<script setup lang="ts">
// script setup composition API
// defineProps макрос Vue
// <> - типизация () -вызов функции defineProps
// {} - для пропсов нужно писать объектную структуру
defineProps<{
  /**
   * Имя
   * @example
   * name: 'John'
   * Обязательность пропса
   * @required
   */
  name: string;
}>();
</script>
