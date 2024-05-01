<script setup>
const $props = defineProps({
  name: String,
  color: String,
  size: {
    type: Number,
    default: 16
  }
});
</script>

<template>
  <svg :width="size" :height="size">
    <use :href="`/sprite.svg#${name}`"></use>
  </svg>
</template>
