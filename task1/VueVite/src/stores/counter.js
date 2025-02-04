import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
    history: [],
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
    lastHistoryItem: (state) =>
      state.history.length ? state.history[state.history.length - 1] : null,
  },
  actions: {
    increment() {
      this.count++;
      // Добавляем копию count в history чтобы избежать реактивных ссылок
      // делаем глубокую копию с помощью (JSON.parse(JSON.stringify(...))
      const countCopy = JSON.parse(JSON.stringify(this.count));
      this.history.push(countCopy);
    },
    reset() {
      this.count = 0;
    },
  },
});
