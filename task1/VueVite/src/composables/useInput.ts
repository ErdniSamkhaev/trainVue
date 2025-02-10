import { ref, watch } from "vue";

export function useInput(initial: string = "", maxLen: number = 20) {
  const value = ref(initial);

  watch(value, (newVal) => {
    if (newVal.length > maxLen) {
      value.value = newVal.slice(0, maxLen);
    }
  });

  return { value };
}
