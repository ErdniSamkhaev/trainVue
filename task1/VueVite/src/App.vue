<template>
  <h1>Hello Vue and Vite</h1>
  <Greeting :name="userName || 'Guest'" />
  <button @click="increment">Click me</button>
  <p>Count: {{ count }}</p>
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

// Реактивные переменные
const count = ref(0);
const userName = ref("");
// Фнукция инкремент
function increment() {
  count.value++;
}
</script>

<style scoped></style>
