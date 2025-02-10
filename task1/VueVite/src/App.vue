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

  <!-- Кнопка для сброса счетчика reset-->
  <button @click="resetCounter">Reset</button>

  <!-- Список истории -->
  <h3>History</h3>
  <ul class="history">
    <li v-for="(item, index) in counterStore.history" :key="index">
      {{ item }}
    </li>
  </ul>
  <p>Last History Item: {{ counterStore.lastHistoryItem }}</p>

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

<script setup lang="ts">
// Импорты
import Greeting from "./components/Greeting.vue";
import ButtonCounter from "./components/ButtonCounter.vue";
import { useCounterStore } from "./stores/counter";
import { useInput } from "./composables/useInput";

// Реактивные переменные
const { value: userName } = useInput();

// Получаем ссылку на хранилище
const counterStore = useCounterStore();

//обработчик для события increment
const handleIncrement = (newCount: number) => {
  console.log("New count:", newCount);
};

// Функция для сброса счетчика через действие reset в хранилище
function resetCounter() {
  counterStore.reset();
}
</script>

<style scoped>
.history {
  list-style-type: none;
  display: flex;
  gap: 5px;
}
</style>
