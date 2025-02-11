<template>
  <h1>Hello Vue and Vite</h1>

  <!-- Компонент Greeting -->
  <Greeting :name="userName || 'Guest'" />

  <!-- Компонент ButtonCounter  с именнованным слотом и слушателем -->
  <ButtonCounter
    class="counter-btn"
    label="Clicks"
    @increment="handleIncrement"
  >
    <template #icon>
      <span style="color: green">(+)</span>
    </template>
  </ButtonCounter>

  <!-- Отображаем удвоение значение счетчика -->
  <p>Double count: {{ counterStore.doubleCount }}</p>

  <!-- Кнопка для сброса счетчика reset-->
  <button class="reset" @click="resetCounter">Reset</button>

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

<style scoped lang="scss">
.history {
  list-style-type: none;
  display: flex;
  gap: 5px;
  padding: 0;

  // Вложенность для элементов списка
  li {
    background-color: color.adjust($primary-color, $lightness: 10%);
    padding: 2px 4px;
    border-radius: 3px;
  }
  input {
    background: linear-gradient(
      90deg,
      color.adjust($primary-color, $lightness: 20%),
      color.adjust($secondary-color, $lightness: 20%)
    );
  }

  @media (max-width: $mobile-breakpoint) {
    flex-direction: column;
    gap: 3px;
  }
}

.reset {
  @include button-style($secondary-color);
  margin-top: 10px;
}

form {
  margin: 20px 0;

  input {
    padding: 10px;
    border: none;
    border-radius: 4px;
    background: linear-gradient(
      90deg,
      color.adjust($primary-color, $lightness: 20%),
      color.adjust($secondary-color, $lightness: 20%)
    );
    transition: all 0.3s;

    &:focus {
      outline: none;
      box-shadow: 0 0 5px $primary-color;
    }
  }
}
</style>
