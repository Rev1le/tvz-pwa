<template>
  <div class="app-status-icon" :class="isOnlineMode ? 'is-online' : 'is-offline'"></div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { storeToRefs } from 'pinia';

let appStore: any = inject('appStore')
appStore = appStore();

const { isOnlineMode } = storeToRefs(appStore)
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