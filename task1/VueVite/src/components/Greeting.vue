<template>
  <h2>Hello, {{ name }}</h2>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>
