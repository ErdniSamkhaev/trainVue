<template>
  <h1>Hello Vue and Vite</h1>
  <!-- Компонент Greeting -->
  <Greeting :name="userName || 'Guest'" />
  <!-- Компонент ButtonCounter  с именнованным слотом и слушателем -->
  <ButtonCounter label="Clicks" @increment="handleIncrement">
    <template #icon>
      <span style="color: green">(+)</span>
    </template>
  </ButtonCounter>

  <!-- Отображаем удвоение значение счетчика -->
  <p>Double count: {{ counterStore.doubleCount }}</p>

  <!-- Кнопка для сброса счетчика -->
  <button @click="resetCounter">Reset</button>

  <form action="#">
    <input
      type="text"
      name="name"
      id="name"
      v-model="userName"
      placeholder="Enter your name"
    />
  </form>
  <p v-if="userName">Username: {{ userName }}</p>
</template>

<script setup>
// Импорты
import { ref } from "vue";
import Greeting from "./components/Greeting.vue";
import ButtonCounter from "./components/ButtonCounter.vue";
import { useCounterStore } from "./stores/counter";

// Реактивные переменные
const userName = ref("");

// Получаем ссылку на хранилище
const counterStore = useCounterStore();

// Функция обработчик для события increment
function handleIncrement(newCount) {
  console.log("New count:", newCount);
}

// Функция для сброса счетчика через действие reset в хранилище
function resetCounter() {
  counterStore.reset();
}
</script>

<style scoped></style>
