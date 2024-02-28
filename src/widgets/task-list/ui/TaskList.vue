<script setup>
// import { PropType } from 'vue';
import { orderTaskIcon, } from "@/features/order-task";

import OkSquared from '@/shared/assets/icons/ok_squared.svg'
import CancelSquared from '@/shared/assets/icons/cancel-squared.svg'

const $props = defineProps({
  taskList: {
    type: Array,
    default: () => []
  },
});

</script>

<template>
  <div class="task-list">
    <component
      v-for="task in taskList" 
      :key="task"
      :is="orderTaskIcon(task) === 'check-square' ? OkSquared : CancelSquared"
    ></component>
  </div>
</template>

<style>
.task-list {
  display: flex;
  gap: 5px;
  justify-content: flex-start;
}
</style>