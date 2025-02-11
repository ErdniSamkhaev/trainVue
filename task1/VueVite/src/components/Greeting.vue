<template>
  <!-- Тег h2 и интерполяция {{ name }} -->
  <!-- name - реактивная переменная из props -->
  <h2 class="greeting-text">Hello, {{ name }}</h2>
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

<style scoped lang="scss">

.greeting-text {
  color: $secondary-color;
  font-size: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: $mobile-breakpoint) {
    font-size: 1.5rem;
  }
}
</style>
