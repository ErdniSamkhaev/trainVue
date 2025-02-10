import { defineStore } from "pinia";
import { ref, computed } from "vue";

// Создание хранилища
export const useCounterStore = defineStore("counter", () => {
  // Инициализация состояния
  const count = ref<number>(0);
  const history = ref<number[]>([]);

  // Геттеры
  const doubleCount = computed(() => count.value * 2);
  const lastHistoryItem = computed<number | null>(() =>
    history.value.length ? history.value[history.value.length - 1] : null
  );

  // Действия
  function increment(): void {
    count.value++;
    // Глубокое копирование
    const countCopy = JSON.parse(JSON.stringify(count.value));
    history.value.push(countCopy);
  }
  function reset(): void {
    count.value = 0;
  }
  // Возвращаем состояние
  return {
    count,
    history,
    doubleCount,
    lastHistoryItem,
    increment,
    reset,
  };
});
