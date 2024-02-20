<template>
  <div class="page-filters">
    <Filter>
    </Filter>
  </div>
</template>

<script setup lang="ts">
import Filter from "@/entities/Filter.vue";
</script>

<style>
.page-filters {
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
}
</style>