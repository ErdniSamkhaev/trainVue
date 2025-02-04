<template>
  <h1>Hello Vue and Vite</h1>
  <!-- Компонент Greeting -->
  <Greeting :name="userName || 'Guest'" />
  <!-- Компонент ButtonCounter вместо старой кнопки -->
  <ButtonCounter label="Current count" />

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

// Реактивные переменные
const userName = ref("");
</script>

<style scoped></style>
