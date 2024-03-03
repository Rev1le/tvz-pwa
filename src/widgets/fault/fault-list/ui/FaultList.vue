<script setup>
import { ref } from 'vue';

import { FaultCard } from '@/entities/fault';

const list = ref([1, 2, 3]);

</script>

<template>
  <div class="fault-list">
    <FaultCard v-for="el in list" />
  </div>
</template>

<style>
.fault-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>