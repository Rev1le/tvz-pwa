<script setup>
const $props = defineProps({
  name: {
    type: String,
    required: true
  },
  color: String,
  size: {
    type: Number,
    default: 16
  }
});
</script>

<template>
  <svg :width="size" :height="size" :fill="color">
    <use :href="`/sprite.svg#${name}`"></use>
  </svg>
</template>
