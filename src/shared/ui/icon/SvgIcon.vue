<script setup>
import { computed, defineAsyncComponent } from 'vue';

const $props = defineProps({
  name: String,
  color: String,
  size: {
    type: Number,
    default: 16
  }
});

const icon = computed(() => {
  const componentPromise = () => import(`./svgs/${$props.name}.svg`)
  return defineAsyncComponent(componentPromise)
});
</script>

<template>
  <component
    :is="icon"
    :fill="color"
    :width="size"
    :height="size"
  />
</template>
