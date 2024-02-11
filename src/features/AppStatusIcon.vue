<template>
  <div class="app-status-icon" :class="iconStateClass"></div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const isOnline = ref(false);

const iconStateClass = computed(() => {
  return isOnline ? 'is-online' : 'is-offline';
});
</script>

<style scoped>
.app-status-icon {
  width: 10px;
  height: 10px;

  border-radius: 50%;

  background-color: gray;
}

.is-online {
  background-color: #2AC04B;
}

.is-offline {
  background-color: gray;
}
</style>