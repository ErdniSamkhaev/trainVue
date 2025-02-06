import { defineStore } from "pinia";

interface CounterState {
  count: number;
  history: number[];
}

export const useCounterStore = defineStore("counter", {
  state: (): CounterState => ({
    count: 0,
    history: [],
  }),
  getters: {
    doubleCount(state): number {
      return state.count * 2;
    },
    lastHistoryItem(state): number | null {
      return state.history.length
        ? state.history[state.history.length - 1]
        : null;
    },
  },
  actions: {
    increment(): void {
      this.count++;
      // Добавляем копию count в history чтобы избежать реактивных ссылок
      // делаем глубокую копию с помощью (JSON.parse(JSON.stringify(...))
      const countCopy = JSON.parse(JSON.stringify(this.count));
      this.history.push(countCopy);
    },
    reset(): void {
      this.count = 0;
    },
  },
});
